# Ramen Review App

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

## Project Overview

The Ramen Restaurant Finder is a React application that allows users to find and add reviews to ramen restaurants in Sydney. The main goal of this application is to provide a central hub for sharing information and location details about the best ramen places in the city.

The application consists of a frontend built using Vite and React, and a backend built using Express.js and Postgres. Bootstrap is used for styling and theming the application.

## Installation and Setup Instructions

To run the Ramen Restaurant Finder locally, follow these steps:

1. Clone the repository from GitHub.
2. Make sure you have a Postgres database set up.
3. Open a terminal and navigate to the cloned repository.
4. Run `npm install` in both the backend and frontend directories to download all dependencies.
5. Run the SQL files provided to inject seed data into your database.
6. In the terminal, start the backend server by running `nodemon server.js`.
7. In a separate terminal, start the frontend by running `npm run dev`.
8. Open a web browser and navigate to http://localhost:5173/ to access the application.

## User Stories

Please refer to the [UserStories.md](UserStories.md) file in the project repository for a detailed description of the user stories. This document outlines the different types of users, their goals, and why this application is valuable to them.

## Wireframes

Please find the wireframes for the major views and interfaces of the application in the [wireframes](https://github.com/lyli127/react-app/wireframes) directory of the project repository. These sketches provide a visual representation of the user interface and layout.

## Challenges Faced

The main challenge during development was figuring out how to display only the desired restaurants on the Google map. This involved implementing filters and search functionalities to fetch and display the relevant data accurately.

The project roadmap includes the addition of login and signup pages for users to edit, share, and like reviews and restaurants. This feature is planned for future development to enhance the user experience and engagement within the application.
