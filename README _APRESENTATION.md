
<p  align="center">

<a  href="http://nestjs.com/"  target="blank"><img  src="https://nestjs.com/img/logo-small.svg"  width="200"  alt="Nest Logo" /></a>

</p>

  

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

  

<p  align="center">Uma estrutura <strong>Node.js</strong> progressiva para criar aplicativos do lado do servidor eficientes e escalonáveis.</p>

  
  

## Description

  

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

  

## Instalação

  

```bash

$ yarn  install

```

  

## Rodar o app

  

```bash

# development

$ yarn  run  start

  

# watch mode

$ yarn  run  start:dev

  

# production mode

$ yarn  run  start:prod

```

  

## Contatos

  

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)

- Website - [https://nestjs.com](https://nestjs.com/)

- Twitter - [@nestframework](https://twitter.com/nestframework)

  

## Licença

  

Nest is [MIT licensed](LICENSE).

  
  

## Setup do projeto

  

1 - Instalação do Node.js 16 ou versão superior:
- npm i -g @nestjs/cli

2 - Precisei pq eu não tinha o yarn. (https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable):
- npm install --global yarn

3 - Criação do projeto (https://docs.nestjs.com/):
- nest new project-name

4 - Passos para gerar um CRUD seguindo a documentação (https://docs.nestjs.com/recipes/crud-generator):

![Screenshot](https://i.imgur.com/3SZor2M.png?raw=true)

5 - Para instalar a biblioteca do typeorm com integração com Postgresql:
- yarn add @nestjs/typeorm typeorm pg

6 - Criação do arquivo de conexão com o banco:
- syncronize: Indica se o esquema do banco de dados deve ser criado automaticamente a cada inicialização do aplicativo. TENHA CUIDADO com esta opção e não a use em produção - caso contrário, você poderá perder dados de produção. Esta opção é útil durante a DEPURAÇÃO e o DESENVOLVIMENTO.

- entities: Entidades a serem carregadas para esta conexão. Aceita classes de entidade e diretórios de onde as entidades precisam ser carregadas. 

- migrations: **São basicamente uma forma de versionar o seu banco de dados.** Migrações a serem carregadas para esta conexão. Aceita classes de migração e padrões globais que representam arquivos de migração.

7 - Importa as configurações no modulo principal

8 - Adiciona a configuração de autoLoadEntities para as entidades serem carregadas automaticamente.
 
 - ```autoLoadEntities: true```

9 - Adiciona a Entidade na importação módulo q deverá ter acesso a mesma:

 - ```TypeOrmModule.forFeature([User])```

10 - Adiciona a injeção do repository no construtor do service:
 
  - ```@InjectRepository(User)```
  - ```private usersRepository: Repository<User>, ```

10 - Chama os métodos do repository.


## Hospedagens:
- Back4App 
- Heroku
- Digital Ocean
- Render (free)
- Fly.io (free)