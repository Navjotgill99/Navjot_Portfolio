# Navjot's Portfolio

This repository contains the code for Navjot Kaur Gill's personal portfolio website. It's a full-stack application built with React for the frontend and Node.js with Express for the backend, using MongoDB as the database.

## Features

- Responsive design for various screen sizes
- Dynamic content fetched from a MongoDB database
- Sections for Home, About, Projects, Skills, and Contact
- Interactive UI with hover effects and animations

## Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Styling**: CSS

## Project Structure

- `frontend/`: Contains all React components and assets
  - `src/components/`: React components for each section
  - `public/css/`: CSS files for styling
  - `public/img/`: Images used in the project
  - `src/assets/`: Additional assets like logos
- `backend/`: Server-side code
  - `server.js`: Express server setup and API routes
- `.env`: Environment variables

## Setup and Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Navjotgill99/Navjot_Portfolio.git
   cd portfolio-project

2. Install dependencies
  **Install backend dependencies**
  cd backend
  npm install
  
  **Install frontend dependencies**
  cd ../frontend
  npm install

3. Set up environment variables
  - Create a `.env` file in the backend directory
  - Add your MongoDB URI and port number:
  text
  MONGODB_URI=your_mongodb_uri_here
  PORT=8888

4. Run the application
  **Start the backend server**
  cd backend
  npm start
  
  **In a new terminal, start the frontend**
  cd frontend
  npm run dev

5. Open http://localhost:5173 in your browser (or the port specified by Vite)

## API Endpoints
- GET `/api/projects`: Fetch all projects
- GET `/api/skills`: Fetch all skills

## Customization
- Update the content in the React components to personalize the portfolio
- Modify the CSS files to change the styling and color scheme
- Add or remove sections by editing the App.jsx file and creating new components

## Deployment
This project can be deployed using platforms like Heroku, Netlify, or Vercel. Make sure to set up your environment variables on your hosting platform.

## Contributing
Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.
