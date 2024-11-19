# React + TypeScript + Vite Agriculture Data Analytics

This project is a React application built with TypeScript and Vite to analyze agricultural data. The app processes and visualizes data from the Manufac_India_Agro_Dataset.json file, displaying tables for yearly crop production and averages using clean code, modular components, and a responsive design.

## Features

React + TypeScript: Provides type safety and modular development.
Vite: Ensures fast development and hot module replacement (HMR).
Mantine UI Library: Used for building responsive and styled tables.
Data Processing: Prepares data from JSON for meaningful insights.
Custom ESLint Configuration: Enforces coding standards and best practices.

# Getting Started

## 1. Prerequisites

Node.js: v14 or higher
Yarn: A package manager for managing dependencies

## 2. Installation

Clone the repository:
git clone https://github.com/123ramashish/indian-agriculture-dashboard.git
cd indian-agriculture-dashboard

Install dependencies:

### yarn

## 3. Run the Project

Start the development server:

### yarn dev

Open the application in your browser at http://localhost:5173.

## 4. Build for Production

Create a production-ready build:

### yarn build

Preview the production build:

### yarn preview

## Folder Structure

`public/` # Public assets served directly  
`src/`  
`├── assets/` # Static assets like images  
`├── components/` # Modular React components  
`│ ├── averageTable/` # AverageTable component  
`│ │ ├── AverageTable.tsx` # Displays crop averages  
`│ │ └── helper.ts` # Helper functions for AverageTable  
`│ ├── yearlyTable/` # YearlyTable component  
`│ │ ├── YearlyTable.tsx` # Displays yearly crop production  
`│ │ ├── helper.ts` # Helper functions for YearlyTable  
`│ │ └── YearlyTable.module.css` # Styles for YearlyTable  
`├── data/` # Data folder  
`│ └── Manufac_India_Agro_Dataset.json` # Raw dataset  
`├── App.tsx` # Root component  
`├── index.css` # Global styles  
`├── main.tsx` # Entry point of the app  
`├── vite-env.d.ts` # Type declarations for Vite  
`eslint.config.js` # ESLint configuration  
`package.json` # Project metadata and dependencies  
`postcss.config.cjs` # PostCSS configuration  
`README.md `# Project documentation  
`tsconfig.app.json` # TypeScript app configuration  
`tsconfig.json` # Base TypeScript configuration  
`tsconfig.node.json` # TypeScript node configuration  
`vite.config.ts` # Vite configuration  
`yarn.lock` # Yarn lock file

# Components

## 1. YearlyTable

- Displays crops with the maximum and minimum production for each year.
- Fetches data from `Manufac_India_Agro_Dataset.json`.
- Fully responsive, with styles managed in `YearlyTable.module.css`.

## 2. AverageTable

- Displays average crop yield and cultivation area from 1950–2020.
- Data preprocessing is modularized in `helper.ts`.

# Customization

## ESLint

We use a custom ESLint configuration to maintain code quality and consistency:

- Type-Aware Lint Rules: Enabled through tseslint.configs.recommendedTypeChecked.
- React Plugin: Enforces React best practices.

To extend or modify:

1.Open eslint.config.js.
2.Update rules or settings as needed.

# Dependencies

## Core

- React: ^18.x.x
- TypeScript: ^4.x.x
- Vite: ^4.x.x
- Mantine Core: ^7.x.x

## Dev

- ESLint: ^8.x.x
- TypeScript ESLint Plugin: ^6.x.x

# License

This project is licensed under the MIT License. See the LICENSE file for details.

# Contact

For questions or feedback:

Email: ramashish62127@gmail.com
GitHub: 123ramashish
