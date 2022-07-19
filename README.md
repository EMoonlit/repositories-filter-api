
# repositories-filter-api

Aplicação com finalidade de buscar e filtrar dados de repositórios consumindo a API do Github.

<hr>

## Descrição de uso:

**Deploy no Heroku:**  [https://repositories-filter-api.herokuapp.com/](https://repositories-filter-api.herokuapp.com/)

### Endpoints:

**GET** `'/'` - Health check da api atual

**GET** `'/find'` - Busca por organização e linguagem de programação através de query params. 
- organization
- lang

*Exemplo:*  [https://repositories-filter-api.herokuapp.com/find?organization=takenet&lang=C%23](https://repositories-filter-api.herokuapp.com/find?organization=takenet&lang=C%23)

*OBS:* Em caso de linguagens ou organizações com caracteres especiais optar por passar o valor encodado C%23 equivale a C#.

Para suporte no url-encoded:  [https://www.urlencoder.org/](https://www.urlencoder.org/)

<hr>

## Descrição para execução local

Com *docker-compose* (recomendado)

[![demonstração](https://github.com/EMoonlit/repositories-filter-api/raw/main/assets/API-example.gif)](https://github.com/EMoonlit/repositories-filter-api/blob/main/assets/API-example.gif)  

**Dependências:** *Docker* e *docker-compose*

 - Clone o repositório;
 - Configure a variável de ambiente removendo o .example do .env;
 - Inicie um container com o comando `docker-compose up -d`

 
Para execução local sem usar o *compose* siga os seguintes passos:

- Clone o repositório 
- Tenha o node instalado, preferêncialmente na v16 
-  Configure a variável de ambiente removendo o .example do .env 
-  Instale as dependências:
	- `npm install`
	- Execute o comando `npm run dev`

*Lembrando que a API usará a porta setada no .env ou 3000.*

<hr>

*[Todos](https://github.com/EMoonlit/repositories-filter-api/blob/main/documentation/CASE.md)*
