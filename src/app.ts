import express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import { errorHandler } from './middlewares/errorHandler';
import { RequestRepositories } from './services/Repositories.service';
import NodeCache from 'node-cache';

const app = express();
const cache = new NodeCache({ stdTTL: 600 })

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Ok'
  })
})

app.get('/find', async (req, res) => {
  const { organization, lang } = req.query;

  const url = `https://api.github.com/orgs/${organization}/repos`;

  let repositoriesInCache = cache.get(`${organization}-${lang}`);
  console.log('repositoriesInCache', repositoriesInCache);


  if (repositoriesInCache === undefined) {
    const repository = new RequestRepositories()
    const repos = await repository.requestRepositories(url, lang as string);
    cache.set(`${organization}-${lang}`, repos);
    repositoriesInCache = repos;
  }
  res.status(200).json(repositoriesInCache)
}
)
app.use('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Not Found'
  })
})

app.use(errorHandler);

export default app;