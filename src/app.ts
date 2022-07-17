import express from 'express';
import 'dotenv/config';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.get('/', (_req, res) => {
  res.sendStatus(200);
});

app.use(errorHandler);

export default app;