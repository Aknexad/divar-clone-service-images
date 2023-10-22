import express from 'express';

import expressApp from './express-app';
import { ENV } from './configs';

const startServer = async () => {
  const app = express();

  await expressApp(app);

  app
    .listen(ENV.PORT, () => {
      console.log(`Server is running on port ${ENV.PORT}`);
    })
    .on('error', err => {
      console.log(err);
      process.exit();
    })
    .on('close', () => {
      // channel.close();
    });
};

startServer();
