This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

- Install docker for Mac https://docs.docker.com/desktop/install/mac-install/
- Install VScode for Mac https://code.visualstudio.com/

## Getting Started

First, run the development server:

```bash
sh .dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Development

- Install sequlize globally `npm i -g sequelize-cli`

## Design

- This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
- Design Style Guide - https://design.duolingo.com/

## CI/CD Notes

- Pusing to the main branch deploys to production https://brush.teethminder.com/
- Pusing to the staging branch deploys to the staging server https://brush-staging.teethminder.com/
