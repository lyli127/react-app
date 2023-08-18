# Ramen Review App

You can access the app via the link below:

https://ramen-app.lyli.dev

## Screenshots

<img width="2552" alt="Screenshot 2023-08-18 at 7 39 18 pm" src="https://github.com/lyli127/react-app/assets/64179648/5bbfaf75-51af-42f8-91c3-835f80353c39">
<img width="2549" alt="Screenshot 2023-08-18 at 7 39 42 pm" src="https://github.com/lyli127/react-app/assets/64179648/b33a4cd0-bfbd-47f9-9abe-e9944fd1397c">
<img width="2536" alt="Screenshot 2023-08-18 at 7 40 05 pm" src="https://github.com/lyli127/react-app/assets/64179648/c2539c59-1701-4b96-b834-bd94bda0685f">

# Ramen Restaurant Finder ReadMe

This document provides an overview of the Ramen Restaurant Finder project, including the technologies used, installation instructions, user stories, wireframes, and any challenges faced during development.

## Technologies Used

- Vite: A fast and efficient frontend build tool for React applications.
- React: A JavaScript library for building user interfaces.
- "@testing-library/jest-dom”: A testing library used for unit testing the application.
- Bootstrap: A popular CSS framework for responsive and mobile-first websites.
- Express.js: A fast and minimalist web application framework for Node.js.
- Postgres: A powerful, open source object-relational database system.
- PG: A PostgreSQL client for Node.js.
- Google Maps API: A JavaScript API for customising and embedding Google Maps.

## Project Overview

The Ramen Restaurant Finder is a React application that allows users to find and add reviews to ramen restaurants in Sydney. The main goal of this application is to provide a central hub for sharing information and location details about the best ramen places in the city.

The application consists of a frontend built using Vite and React, and a backend built using Express.js and Postgres. Bootstrap is used for styling and theming the application.

## Installation and Setup Instructions

To run the Ramen Restaurant Finder locally, follow these steps:

1. Clone the repository from GitHub.
2. Make sure you have a Postgres database set up.
3. Open a terminal and navigate to the cloned repository.
4. Run `npm install` in both the backend and frontend directories to download all dependencies.
5. Run the SQL files provided to inject seed data into your database. (You can run SQL files ins psql with the command `\i filename.sql`)
6. In the terminal, start the backend server by running `nodemon server.js`.
7. In a separate terminal, start the frontend by running `npm run dev`.
8. Open a web browser and navigate to http://localhost:5173/ to access the application.

## User Stories

Please refer to the [UserStories.md](UserStories.md) file in the project repository for a detailed description of the user stories. This document outlines the different types of users, their goals, and why this application is valuable to them.

## Challenges Faced

The main challenge during development was figuring out how to display only the desired restaurants on the Google map. This involved implementing filters and search functionalities to fetch and display the relevant data accurately.

The project roadmap includes the addition of login and signup pages for users to edit, share, and like reviews and restaurants. This feature is planned for future development to enhance the user experience and engagement within the application.
