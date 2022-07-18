# repositories-filter-api

### TODO

- &check; construir API;
- &check; adicionar estrutura basica, api e flow;
- &cross; refatorar API aplicando melhores práticas;
- &cross; documentar readme;
- &cross; inserir nova feature -> busca em repos de usuários;

### Descrição de uso autal

Deploy no Heroku: https://repositories-filter-api.herokuapp.com/

Endpoints:
GET '/' - Health check da api atual
//TODO, adicionar conferência da API do GitHub, e ou demais API's que forem consumidas.

GET '/find' - Busca por organização e linguagem de programação por query params.
organization
lang

exemplo: https://repositories-filter-api.herokuapp.com/find?organization=takenet&lang=C%23
\*obs: em caso de linguagens ou organizações com caracteres especiais optar por passar o valor encodado C%23 equivale a C#.
site para suporte no url-encoded: https://www.urlencoder.org/

### Descrição para execução local

Dependências: Node v16

TODO:
Adicionar imagem docker no docker hub e tutorial de execução.
Adicionar docker-compose para futura integração com outros serviços.
