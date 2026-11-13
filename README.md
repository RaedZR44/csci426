# Student Course Registration Website

A React single-page website for a university, including key pages for:

- Home
- Departments
- Courses
- Registration

The app uses React Router for navigation and a custom stylesheet for the current UI design.

## Tech Stack

- React
- React Router DOM
- Create React App (react-scripts)
- Plain CSS

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Available Scripts

### npm start

Runs the app in development mode.

### npm test

Runs the test runner in watch mode.

### npm run build

Builds the app for production into the build folder.

### npm run eject

Ejects the app configuration from Create React App (one-way operation).

## Project Structure

```text
project/
	public/
	src/
		assets/
		components/
			Navbar.js
			Footer.js
		pages/
			Home.js
			Departments.js
			Courses.js
			Registration.js
		App.js
		index.js
		style.css
```

## Main Features

- Multi-page SPA experience with client-side routing
- Hero section with local asset image
- Department and course presentation sections
- Registration form UI
- Responsive layout for desktop and mobile

## Notes

- Styles are centralized in src/style.css.
- Image assets are stored in src/assets.
