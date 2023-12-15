# App

GymPass style app.

## RFs (Requisitos funcionais )

- [ ] Deve ser possível de cadastrar
- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível obter o perfil de um usuário logado
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado
- [ ] Deve ser possível o usuário obter seu histórico de check-ins
- [ ] Deve ser possível o usuário buscar academias proximas
- [ ] Deve ser possível o usuário buscar academias pelo nome
- [ ] Deve ser possível o usuário realizar check-in de uma academia
- [ ] Deve ser possível validar o check-in de um usuário
- [ ] Deve ser possível cadastrar uma academia

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia
- [ ] O usuario não pode fazer check-in se não estiver perto (100m) da academia
- [ ] O check-in só pode ser validado 20 min após ser validado
- [ ] O check-in só pode ser validado por administradores
- [ ] A academia só pode ser cadastrada por administradores

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estra criptografada
- [ ] Os dados da aplicação precisam estra persistidos em um banco POstgreSQL
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página
- [ ] O usuário deve ser identificado po um JWT (JSON Web Token)







node-postgres.com

ORM - Object relational Map
    sequelize.org
    typeORM
    ** prisma.io **
knexjs.org (query-builder)

## DOCKER
docker.com
https://hub.docker.com/

## subir aplicação no docker
    docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql

    npx prisma migrate dev

## SOLID
Uncle Bob(Clean Code)

S
O
L
I
D - Dependency Inversion Priciple



## PRISMA

O Prisma é um ORM (Object Relational Mapping)
https://www.prisma.io/docs/getting-started


## ESLINT

O ESLint analisa estaticamente seu código para encontrar problemas rapidamente. É implementado na maioria dos editores de texto e você pode usá-lo como parte de seu processo de integração contínua.

https://pt-br.eslint.org/

## tsup

Ferramenta de empacotamento (bundling) e compilação para projetos TypeScript. Ela facilita a criação de pacotes JavaScript a partir do código TypeScript e é uma alternativa mais simples e minimalista comparada a ferramentas mais complexas de empacotamento, como o Webpack e Rollup.

https://developer.enonic.com/docs/tsup-starter


## bcryptjs

O bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.

https://www.npmjs.com/package/bcryptjs


## dontenv

O Dotenv é um pacote que serve justamente para gerenciar as variáveis de ambiente dentro de um projeto Node. js. Essa ferramenta armazena a configuração dessas variáveis em um ambiente separado do código da aplicação.

https://www.npmjs.com/package/dotenv

## fastify

O Fastify é um framework que permite que você crie servidores REST, bem como uma API REST. Em comparação com o Express, a forma como se desenvolve uma API é bem parecida.

https://www.npmjs.com/package/fastify

## Zod

Zod é uma biblioteca de validação de esquema que permite validar e tipar dados de entrada em sua aplicação TypeScript. Ela oferece uma maneira fácil e intuitiva de definir e validar esquemas de objeto em tempo de execução, ajudando a garantir que os dados de entrada atendam aos requisitos de validação definidos

https://www.npmjs.com/package/zod
