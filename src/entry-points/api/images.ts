import express, { Request, Response, NextFunction, Router } from 'express';

const router = express.Router();

export default function images(): Router {
  router.post(
    '/upload',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = '';
        res.status(200).json({ msg: '', payload: result });
      } catch (error) {
        next(error);
      }
    }
  );

  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = '';
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
