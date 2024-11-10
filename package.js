// src/pages/index.js
import React from 'react';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return <Dashboard />;
}

// src/components/Dashboard.js
import React from 'react';
import RiskManagement from './RiskManagement';
import CashFlowManagement from './CashFlowManagement';
import PropertyComparison from './PropertyComparison';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">מערכת ניהול נדל"ן</h1>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RiskManagement />
        <CashFlowManagement />
        <PropertyComparison />
      </main>
    </div>
  );
};

export default Dashboard;

// package.json
{
  "name": "real-estate-crm",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export",
    "deploy": "next build && next export && git add out/ && git commit -m \"Deploy\" && git subtree push --prefix out origin gh-pages"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "lucide-react": "latest",
    "@tailwindcss/forms": "latest",
    "tailwindcss": "latest",
    "autoprefixer": "latest",
    "postcss": "latest"
  }
}

// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/real-estate-crm'
};

module.exports = nextConfig;

// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

// src/styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
          
      - name: Install Dependencies
        run: npm install
        
      - name: Build and Export
        run: |
          npm run build
          npm run export
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
