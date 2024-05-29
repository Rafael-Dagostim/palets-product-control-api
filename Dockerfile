FROM node:latest

RUN npm i -g pnpm prisma 

USER node

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN pnpm i

COPY . .

ENTRYPOINT [ ".docker/entrypoint.sh" ]
