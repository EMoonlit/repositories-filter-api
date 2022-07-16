import express from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (_req, res) => {
  res.sendStatus(200);
})

export default app;