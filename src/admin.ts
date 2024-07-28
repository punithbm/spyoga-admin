import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import { Database, Resource } from '@adminjs/typeorm';
import express from 'express';

import { AppDataSource } from './data-source';
import { User } from './entities/user';
import { Batch } from './entities/batch';
// Import other entities similarly

AdminJS.registerAdapter({ Database, Resource });

const start = async () => {
  await AppDataSource.initialize();

  const app = express();
  const adminJs = new AdminJS({
    resources: [
      { resource: User, options: { parent: 'User Management' } },
      { resource: Batch, options: { parent: 'Class Management' } },
      // Add other resources similarly
    ],
    rootPath: '/admin',
  });

  const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: async (email, password) => {
      if (email === 'admin@example.com' && password === 'password') {
        return { email: 'admin@example.com' };
      }
      return null;
    },
    cookiePassword: 'some_secret_password',
  });

  app.use(adminJs.options.rootPath, router);

  app.listen(3000, () => {
    console.log('AdminJS is running on http://localhost:3000/admin');
  });
};

start().catch((err) => console.log(err));
