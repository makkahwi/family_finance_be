export const findRequest = ({ query, relations }) => ({
  relations,
  where: rebuildParams(query),
});

export const rebuildParams = (where) => {
  let finalWhere = {};

  if (where) {
    const ors = Object.keys(where).filter(
      (key) => typeof where[key] === 'object',
    );

    const nonOrs = Object.keys(where)
      .filter((key) => typeof where[key] !== 'object')
      .reduce(
        (final, current) => ({ ...final, [current]: where[current] }),
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
        ...ors.map((key) => where[key].map((value) => ({ [key]: value }))),
      ).map((row) =>
        row.reduce((final, current) => ({ ...final, ...current }), {
          ...nonOrs,
        }),
      );
    } else {
      finalWhere = where;
    }
  }

  return finalWhere;
};
