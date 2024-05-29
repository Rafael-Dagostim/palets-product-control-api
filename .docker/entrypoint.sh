#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

pnpx prisma migrate dev
pnpx prisma generate

pnpm start:dev