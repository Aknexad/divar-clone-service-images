import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import images from './entry-points/api/images';
import { errorHandler, isOperationalError } from './middleware';

export default async (app: Application) => {
  app.use(express.json());
  app.use(helmet());
  app.use(cors());

  app.use('/advertisement', images());

  app.use(errorHandler);

  process.on('uncaughtException', (reason: string, p: Promise<any>) => {
    throw reason;
  });

  process.on('unhandledRejection', (error: Error) => {
    if (!isOperationalError(error)) {
      process.exit(1);
    }
  });
};
