
# Next JS Template

Steps to create a new next js project according to Prave Inc standards


## Requirements

 - [Node JS 18+](https://nodejs.org/en)


## Installation

Install your-project with create-next-app. Enable Typescript, ESLint, Tailwind CSS, src directory, App Router. Dont customize default imports

```bash
npx create-next-app@latest your-project
cd my-project
pnpm install
```

Install required development dependencies

```bash
pnpm add -D @trivago/prettier-plugin-sort-imports eslint-config-prettier prettier prettier-plugin-tailwindcss
```

Add `prettier` and `prettier:check` scripts to `package.json` file

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prettier:check": "prettier --check --ignore-unknown .",
    "prettier": "prettier --write --ignore-unknown ."
},
```

### Copy Another File And Folder From This Repository

- `.github`
- `.gitattributes`
- `.nvmrc`
- `prettier.config.js`
- `tailwind.config.ts`
- `layout.tsx`
- `page.tsx`


### Replace `globals.css` file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}
```
