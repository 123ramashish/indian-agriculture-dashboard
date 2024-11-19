React + TypeScript + Vite Agriculture Data Analytics
This project is a React application built with TypeScript and Vite to analyze agricultural data. The app processes and visualizes data from the Manufac_India_Agro_Dataset.json file, displaying tables for yearly crop production and averages using clean code, modular components, and a responsive design.
Features
React + TypeScript: Provides type safety and modular development.
Vite: Ensures fast development and hot module replacement (HMR).
Mantine UI Library: Used for building responsive and styled tables.
Data Processing: Prepares data from JSON for meaningful insights.
Custom ESLint Configuration: Enforces coding standards and best practices.
Getting Started

1. Prerequisites
   Node.js (v14 or higher)
   Yarn package manager
2. Installation
   Clone the repository:

bash
Copy code
git clone https://github.com/123ramashish/your-repo.git
cd your-repo
Install dependencies using Yarn:

bash
Copy code
yarn 3. Run the Project
Start the development server:

bash
Copy code
yarn dev
Open http://localhost:5173 in your browser to view the application.

4. Build for Production
   To create a production-ready build:

bash
Copy code
yarn build
Preview the production build:

bash
Copy code
yarn preview
Folder Structure
plaintext
Copy code
public/ # Public assets served directly
src/
assets/ # Static assets like images
components/ # Modular React components
averageTable/ # AverageTable component
AverageTable.tsx # Displays crop averages
helper.ts # Helper functions for AverageTable
yearlyTable/ # YearlyTable component
helper.ts # Helper functions for YearlyTable
YearlyTable.module.css# Styles for YearlyTable
YearlyTable.tsx # Displays yearly crop production
data/ # Data folder
Manufac_India_Agro_Dataset.json # Raw dataset
App.tsx # Root component
index.css # Global styles
main.tsx # Entry point of the app
vite-env.d.ts # Type declarations for Vite
eslint.config.js # ESLint configuration
package.json # Project metadata and dependencies
postcss.config.cjs # PostCSS configuration
README.md # Project documentation
tsconfig.app.json # TypeScript app configuration
tsconfig.json # Base TypeScript configuration
tsconfig.node.json # TypeScript node configuration
vite.config.ts # Vite configuration
yarn.lock # Yarn lock file
Components

1. YearlyTable
   Displays crops with the maximum and minimum production for each year.
   Fetches data from Manufac_India_Agro_Dataset.json.
   Fully responsive with styles managed in YearlyTable.module.css.
2. AverageTable
   Displays average crop yield and cultivation area from 1950–2020.
   Data preprocessing is modularized in helper.ts.
   Customization
   ESLint
   We use a custom ESLint configuration to maintain code quality and consistency:

Type-Aware Lint Rules: Enabled through tseslint.configs.recommendedTypeChecked.
React Plugin: Enforces React best practices.
To extend or modify:

Open eslint.config.js.
Update rules or settings as needed.
Scripts
Script Description
yarn Installs all project dependencies
yarn dev Starts the development server
yarn build Builds the app for production
yarn preview Previews the production build
Dependencies
Core
React: ^18.x.x
TypeScript: ^4.x.x
Vite: ^4.x.x
Mantine Core: ^7.x.x
Dev
ESLint: ^8.x.x
TypeScript ESLint Plugin: ^6.x.x
Contributing
Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Make your changes and commit:
bash
Copy code
git commit -m "Add feature-name"
Push to your fork:
bash
Copy code
git push origin feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For questions or feedback:

Email: your-email@example.com
GitHub: your-username
