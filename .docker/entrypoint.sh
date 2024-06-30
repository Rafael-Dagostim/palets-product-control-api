#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

pnpm install --force

pnpx prisma migrate dev
pnpx prisma generate

pnpm start:dev