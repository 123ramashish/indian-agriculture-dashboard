# React + TypeScript + Vite Agriculture Data Analytics

This project is a React application built with TypeScript and Vite to analyze agricultural data. The app processes and visualizes data from the Manufac_India_Agro_Dataset.json file, displaying tables for yearly crop production and averages using clean code, modular components, and a responsive design.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

<!--  1.the package install command command is -->

yarn

<!-- 2. the command to run project -->

yarn dev

<!-- the folder structure is -->

public
src
assests
components
averageTable
AverageTable.tsx
helper.ts
yearlyTable
helper.ts
YearlyTable.module.css
YearlyTable.tsx
data
Manufac_India_Agro_Dataset.json
App.tsx
index.css
main.tsx
vite-env.ts
eslint.config.js
package.json
postcss.config.cjs
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
yarn.lock
