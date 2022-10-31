## Description

Technical assessment for the company lovyca

## Installation

```bash
$ yarn add
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Instruções para rodar o app:

Backend:

- Usar o código 'docker compose up' para montar o container
- Iniciar a aplicação com 'yarn start:dev'
- App irá rodar na porta localhost:3000

Frontend:

- Iniciar a aplicação com 'yarn dev'
- App irá rodar na porta localhost:3001

Backend:

Sobre a arquitetura: Escolhi aplicar a Clean Architecture, por ser uma arquitetura independente e que facilita uma manutenção futura.

Bibliotecas:
-class-transformer / class-validator
-passport / passport-jwt
-pg
-typeorm

Melhorias:
-Tratamento de erros
-Observabilidade
-Implementação de testes unitários
-Deploy da aplicação
-Configurar SDK do Firebase

Requisitos não entregues: testes

Frontend:

Sobre a arquitetura: Usei a arquitetura padrão do NextJS

Bibliotecas:
-axios
-firebase
-react-firebase-hooks
-nookies
-tailwindcss

Melhorias:
-Separação de componentes e organização do código
-tratamento de dados
-Uso da api nativa do Next
-Responsividade das telas
-key da tabela do dashboard
-Solucionar erro da página de login
-Aumentar segurança

Requisitos não entregues: tela de edit service
