
# repositories-filter-api

### TODO:
-  [x]  construir API;
-  [x] adicionar estrutura basica requerida:
	-   [x] api;
	-   [x] flow;
-  [ ] refatorar API aplicando melhores práticas;
-  [ ] Adicionar imagem docker no docker hub e tutorial de execução.
-  [x] documentar readme;
-  [ ] inserir nova feature -> busca em repositórios públicos de usuários;
-  [ ] inserir nova feature -> filtros dinâmicos;
-  [x] Adicionar docker-compose para futura integração com outros serviços.
-  [ ] analizar -> necessidade de persistência em banco;

### Descrição de uso autal

**Deploy no Heroku:**  [https://repositories-filter-api.herokuapp.com/](https://repositories-filter-api.herokuapp.com/)

**Endpoints:**
**GET** `'/'` - Health check da api atual  *//TODO, adicionar conferência da API do GitHub, e ou demais API's que forem consumidas.*

**GET** `'/find'` - Busca por organização e linguagem de programação por query params. 
-  [x] organization;
-  [x] lang;

*exemplo:*  [https://repositories-filter-api.herokuapp.com/find?organization=takenet&lang=C%23](https://repositories-filter-api.herokuapp.com/find?organization=takenet&lang=C%23)  
*obs:* em caso de linguagens ou organizações com caracteres especiais optar por passar o valor encodado C%23 equivale a C#. 
*site para suporte no url-encoded:  [https://www.urlencoder.org/]*(https://www.urlencoder.org/)

### Descrição para execução local

Com docker-compose - *recomendado*  [![demonstração](https://github.com/EMoonlit/repositories-filter-api/raw/main/assets/API-example.gif)](https://github.com/EMoonlit/repositories-filter-api/blob/main/assets/API-example.gif)  

**Dependências:** Docker e docker-compose

 - Clone o repositório;
 - Configure a variável de ambiente removendo o .example do .env;
 - Inicie um container com o comando docker-compose up -d

 
**Para execução local sem usar o compose siga os seguintes passos:** 
- Clone o repositório 
- Tenha o node instalado, preferêncialmente na v16 
-  Configure a variável de ambiente removendo o .example do .env 
-  Instale as dependências:
	- npm install ;
	- Execute o comando npm run dev;
*Lembrando que a API usará a porta setada no .env ou 3000.*
