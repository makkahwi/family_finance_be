import { DataSourceOptions } from 'typeorm';

import 'reflect-metadata';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: 'sqlite',
  entities: [__dirname + '/**/data/*.entity{.ts,.js}'],
  synchronize: true,
};
