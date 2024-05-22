#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

if [ -d "/app/node_modules" ]; then
    echo "Removendo a pasta node_modules existente..."
    rm -rf /app/node_modules
fi

pnpm install

pnpm start:dev