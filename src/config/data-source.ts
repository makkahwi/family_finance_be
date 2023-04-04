import { DataSourceOptions } from 'typeorm';

import { User } from '../users/entities/user.entity';

import 'reflect-metadata';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'postgres',
  synchronize: true,
  logging: false,
  // entities: [User],
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['src/migration/*.ts'],
  subscribers: [],
};
