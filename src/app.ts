import express from 'express';
import 'dotenv/config';
import { errorHandler } from './middlewares/errorHandler';
import { Repository } from './services/Repositories.service';

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  const { organization, lang } = req.query;
  const repository = new Repository()
  const repos = await repository.requestRepositories(`https://api.github.com/orgs/${organization}/repos`, lang as string);
  res.status(200).json(repos);
});

app.use(errorHandler);

export default app;