import {
  Equal,
  ILike,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';

const postfixes = [
  {
    name: 'Sort',
    postfix: '_sort',
  },
  {
    name: 'Bigger Than',
    postfix: '_bt',
    operator: MoreThan,
  },
  {
    name: 'Bigger Than Or Equal',
    postfix: '_bte',
    operator: MoreThanOrEqual,
  },
  {
    name: 'Smaller Than',
    postfix: '_st',
    operator: LessThan,
  },
  {
    name: 'Smaller Than Or Equal',
    postfix: '_ste',
    operator: LessThanOrEqual,
  },
  {
    name: 'Equal',
    postfix: '_eq',
    operator: Equal,
  },
  {
    name: 'Not Equal',
    postfix: '_ne',
    operator: Not,
  },
  {
    name: 'Like',
    postfix: '_lk',
    operator: ILike,
  },
];

const buildSortQuery = (query) => {
  if (query) {
    const keys = Object.keys(query).filter((key) => key.includes('_sort'));

    return keys?.reduce((final, current) => {
      const prop = current.replace('_sort', '');
      return { ...final, [prop]: query[current] };
    }, {});
  } else {
    return {};
  }
};

const buildWhereQuery = (query) => {
  let finalWhere = {};

  if (query) {
    const keys = Object.keys(query).filter((key) => !key.includes('_sort'));

    if (keys.length) {
      const ors = keys?.filter((key) => typeof query[key] === 'object');

      const nonOrs = keys
        ?.filter((key) => typeof query[key] !== 'object')
        .reduce(
          (final, current) => ({ ...final, [current]: query[current] }),
          {},
        );

      const cartesian = (...args) =>
        args.reduce(
          (a, b) =>
            a
              .map((x) => b.map((y) => x.concat([y])))
              .reduce((acc, t) => acc.concat(t), []),
          [[]],
        );

      if (ors.length > 0) {
        finalWhere = cartesian(
          ...ors.map((key) => query[key].map((value) => ({ [key]: value }))),
        ).map((row) =>
          row.reduce((final, current) => ({ ...final, ...current }), {
            ...nonOrs,
          }),
        );
      } else if (nonOrs) {
        finalWhere = nonOrs;
      }
    }
  }

  return finalWhere;
};

export const findRequest = ({ query, relations }) => ({
  relations,
  where: buildWhereQuery(query),
  order: buildSortQuery(query),
});
