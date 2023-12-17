# README DOC
https://readme.so/pt/editor


# App

GymPass style app.

## RFs (Requisitos funcionais )

- [x] Deve ser possível de cadastrar
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

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia
- [ ] O usuario não pode fazer check-in se não estiver perto (100m) da academia
- [ ] O check-in só pode ser validado 20 min após ser validado
- [ ] O check-in só pode ser validado por administradores
- [ ] A academia só pode ser cadastrada por administradores

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estra criptografada
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




## POO
Representar cada elemento da vida real em objetos

    ### Pilares
    - Herança
    - Polimorfismo
    - Encapsulamento
    - Abstração

### UML


## DESIGN PATERNS

https://youtu.be/QY0Kdg83orY


## AGILE

## TDD

## SCRUM
https://www.scrum.org/

Referencias:
https://youtu.be/ln6t3uyTveQ

Livro:
https://www.amazon.com.br/SCRUM-fazer-dobro-trabalho-metade/dp/8543107164/ref=asc_df_8543107164/?tag=googleshopp00-20&linkCode=df0&hvadid=379751563849&hvpos=&hvnetw=g&hvrand=12236658454849852678&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031549&hvtargid=pla-810952799643&psc=1&mcid=6889a5380b23339db0e169691be990a7


## CLEAN CODE
Uncle Bob
referencias:
https://www.youtube.com/watch?v=ln6t3uyTveQ
* Os nomes são importantes
* Regra do escoteiro
* Você é o autor do código
* DRY(Don't Repeat Yourself) - Não repita a si mesmo
* Comentários no código ❌
* Tratamentos de erros
* Testes (regras FIRST - Fast/Independent/Repeatable/Self-Validation/Timely(Pontualidade))

Livro
https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675/ref=asc_df_8576082675/?tag=googleshopp00-20&linkCode=df0&hvadid=379792215563&hvpos=&hvnetw=g&hvrand=13151762692712609075&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031549&hvtargid=pla-398225630878&psc=1&mcid=2b0fb83a4146383497d27512de9c9086


## SOLID
** Autores **
* Uncle Bob(Clean Code) *
* Robert C. Martin *

referencias: 
* https://www.youtube.com/watch?v=6SfrO3D4dHM *
* https://www.youtube.com/watch?v=arAz2Ff8s88 *
* https://www.youtube.com/watch?v=mkx0CdWiPRA *
* https://www.youtube.com/watch?v=vAV4Vy4jfkc *


$ PILARES SOLID

* S - SRP = Single-responsibility principle (Princípio da responsabilidade única)
* O - OCP = Open-closed principle (Princípio aberto-fechado)
* L - LSP = Liskov Substitution Principle (Princípio da Substituição de Liskov)
* I - ISP = Interface Segregation Principle (Princípio de segregação de interface)
* D - DIP = Dependency Inversion Priciple (Princípio de Inversão de Dependência)



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

## Vitest
O Vitest é um framework de teste unitário JavaScript/TypeScript moderno e fácil de usar. Ele é baseado no Jest, mas oferece recursos adicionais, como: Testes síncronos e assíncronos: Adequado para testar código que usa APIs ou outras dependências assíncronas.

https://www.npmjs.com/package/vitest

