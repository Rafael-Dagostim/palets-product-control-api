FROM node:latest as base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PRISMA_SKIP_POSTINSTALL_GENERATE=true
RUN corepack enable

WORKDIR /app

COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

ENTRYPOINT [ ".docker/entrypoint.sh" ]
