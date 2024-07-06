# Astro : with Sanity CMS

```sh
npm install
npm run dev
```
```
after downloading the code run the site locally using npm (or other package-manager) install then npm run dev 
after site is built with npm run dev - all code output is in the dist folder in the root directory

```

```
This Project contains Astro & Sanity CMS.
All CMS post types and settings are in the sanity folder in root directory. To run both locally after installing the dependencies, navigate to the folder and use the "run dev" command. The "run build" command will build the production site locally. All commands will are saved in the relevant package.json under the scripts object.
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [the documentation](https://docs.astro.build) 
