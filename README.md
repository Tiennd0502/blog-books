# Next.js practice one

## Overview

- This document provides information about Next.js practice one

## Tech stacks

- Next.js

- React

- TypeScript

- Storybook

- Chakra UI

- Jest, React testing library

## Timeline

- Estimated time: 9 days (Otc 21, 2022 - Nov 3, 2022)

- Actual time: 14 days (Otc 21 - Nov 14, 2022)

## Time size

- 1 dev

## Editor

- [Visual studio code](https://code.visualstudio.com/)

## Targets

- Apply core knowledges of [NextJS](https://nextjs.org/)

  - Re-rendering Strategies: SSR, SSG, ISR

  - Using API References (next/head, next/link, next/router,...)

- Understand how to write unit tests for components

- Apply [Storybook](https://storybook.js.org/)

## Features

- My website allows to:

  - User can see list books

  - User can search books by title, author (on current page)

  - User can get more books with pagination

  - User can see book details

  - User can like book

## Requirements

- [Node](https://nodejs.org/en/ "Node") >= [17.0.1](https://nodejs.org/en/download/releases/)

- [pnpm](https://pnpm.io/) >= [6.25.0](https://pnpm.io/6.x/installation)

## Getting started

#### Step by step to run this app in your local:

| Command                                                                 | Action                                         |
|:------------------------------------------------------------------------|:-----------------------------------------------|
| `git clone git@gitlab.asoft-python.com:g-tiennguyen/react-training.git` | Download source code                           |
| `git checkout feature/practice-one`                                     | Move branch                                    |
| `cd react-training/practice-nextjs/practice-one`                        | Move to the folder containing the source code  |
| `pnpm install`                                                          | Installs dependencies                          |
| `pnpm test-coverage`                                                    | Run test with coverage                         |
| `pnpm storybook`                                                        | Preview UI component: `http://localhost:6006`  |
| `pnpm dev`                                                              | Starts local dev server at `localhost:3000`    |
| `pnpm start`                                                            | Preview your build locally: `localhost:3000`   |


 > Note: Before running `pnpm dev` or `pnpm start`: create .env file:
```
NEXT_PUBLIC_BASE_URL = https://61b189803c954f001722a9e5.mockapi.io
````
