FROM node:latest

RUN npm i -g pnpm 

USER node

WORKDIR /app

COPY . .

ENTRYPOINT [ ".docker/entrypoint.sh" ]
