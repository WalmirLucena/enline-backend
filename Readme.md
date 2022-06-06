# Backend Desafio Enline

Desenvolve em Node a API para upload de arquivos, onde será possivel realizar as funções de CRUD com estes, 
salvando no banco de dados MongoDB o seu log.

## Checklist de desenvolvimento

- [x]  Configurar o ambiente de Desenvolvimento em Node + Typescript
- [x]  Desenvolver a estrutura de Arquivos da Api
- [x]  Configurar conexão com o MongoDB
- [x]  Criar Banco de Dados No CloudAtlas
- [x]  Desenvolver camada Model
- [x]  Desenvolver camada Service
- [x]  Desenvolver camada Controller
- [x]  Desenvolver Rotas
- [x]  Verificar Devido funcionamento das camadas
- [x]  Testes Unitários
- [x]  Docker
- [ ]  Documentar em Swagger
- [x]  Deploy Heroku


## Executando a aplicação

Clone o repositório:

```bash
git clone git@github.com:WalmirLucena/enline-backend.git
```
Navegue até o diretório do projeto:

Instalando as dependências:

```bash
npm install
```
Iniciando a aplicação:


```bash
npm start
```
## Testando a aplicação

Executando os testes:

```bash
npm run test
```
Mostrando a cobertura dos testes da aplicação:

```bash
npm run test:coverage
```
## Deploy Heroku

O deploy no heroku pode ser acessado pela seguinte url https://enline-upload-backend.herokuapp.com/post

