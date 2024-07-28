import { DataSource } from 'typeorm';

import { User } from './entities/user.js';
import { Batch } from './entities/batch.js';
// Import other entities similarly

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'your_host',
  port: 3306,
  username: 'your_username',
  password: 'your_password',
  database: 'spyoga',
  synchronize: true,
  logging: false,
  entities: [User, Batch],
  migrations: [],
  subscribers: [],
});
