FROM node:latest as base

RUN corepack enable

WORKDIR /app

COPY . .

RUN chmod +x .docker/entrypoint.sh

ENTRYPOINT [ "sh", ".docker/entrypoint.sh" ]
