#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

npm install

npx prisma migrate dev
npx prisma generate

npm run start:dev