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