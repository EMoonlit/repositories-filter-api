# repositories-filter-api

### TODO

- &check; construir API;
- &check; adicionar estrutura basica, api e flow;
- &cross; refatorar API aplicando melhores práticas;
- &cross; documentar readme;
- &cross; inserir nova feature -> busca em repositórios públicos de usuários;
- &cross; inserir nova feature -> filtros dinâmicos;
- &cross; analizar -> necessidade de persistência em banco;

### Descrição de uso autal

Deploy no Heroku: https://repositories-filter-api.herokuapp.com/

Endpoints:
GET '/' - Health check da api atual
//TODO, adicionar conferência da API do GitHub, e ou demais API's que forem consumidas.

GET '/find' - Busca por organização e linguagem de programação por query params.
organization
lang

exemplo: https://repositories-filter-api.herokuapp.com/find?organization=takenet&lang=C%23
obs: em caso de linguagens ou organizações com caracteres especiais optar por passar o valor encodado C%23 equivale a C#.
site para suporte no url-encoded: https://www.urlencoder.org/

### Descrição para execução local
Com docker-compose - recomendado
![demonstração](https://github.com/EMoonlit/repositories-filter-api/blob/main/assets/API-example.gif)
Dependências: Docker e docker-compose

Clone o repositório, configure a variável de ambiente removendo o .example do .env
Inicie um container com o comando docker-compose up -d

Para execução local sem usar o compose siga os seguintes passos:
Clone o repositório
Tenha o node instalado, preferêncialmente na v16
Configure a variável de ambiente removendo o .example do .env
Instale as dependências, npm install
Execute o comando npm run dev, lembrando que a API usará a porta setada no .env ou 3000.

TODO:
Adicionar imagem docker no docker hub e tutorial de execução.

- &check; Adicionar docker-compose para futura integração com outros serviços.
