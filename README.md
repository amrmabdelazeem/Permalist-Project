# Todo List App

This is a simple todo list application built using Node.js, Express, and PostgreSQL.

## Prerequisites

- Node.js installed
- PostgreSQL installed

# Getting Started

1. Clone this repository to your local machine.
2. Create a new PostgreSQL database and update the .env file with the correctcredentials.
3. Run npm install to install the necessary dependencies.
4. Run npm start to start the application.
5. Open your web browser and navigate to http://localhost:3000 to view the todo list.

# Features

- Add new items to the list
- Edit existing items
- Delete items
- View all items in the list

# Technologies Used

- Node.js
- Express
- PostgreSQL
- EJS (Embedded JavaScript) templates
- Body-parser middleware

# Code Structure

The code for this application is structured as follows:

- index.js: The main entry point for the application. This file sets up the Express server and connects to the PostgreSQL database.

- views/: A directory containing the EJS templates used to render the HTML for the application.

- public/: A directory containing static assets such as CSS and JavaScript files.

# Database Schema

The application uses a single database table called items. This table has two columns: id (a unique identifier for each item) and title (the text of the item).

# Acknowledgements

This project was inspired by various tutorials and resources available online. Special thanks to the creators of those resources.
