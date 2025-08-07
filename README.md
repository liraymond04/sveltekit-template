# sveltekit-template

Code examples are provided in `src/routes/embed` at [auav-web-dev](https://github.com/liraymond04/auav-web-dev)

Search the project for `TODO` for hints on where to start

## Installation

Install [Node.js](https://nodejs.org/en) version 18 or higher

```sh
# install required packages
npm i
```

```sh
# set up .env variables
cp .env.example .env
```

```sh
# initialize database
npm run db:push
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev
```

You can access the app at `http://localhost:5173`

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
