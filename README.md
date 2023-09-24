# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Todo Application

![Todo App Screenshot](todo-app-screenshot.png)

This is a simple Todo application built using React, Vite, and a Node.js backend. It allows users to manage their tasks by providing CRUD (Create, Read, Update, Delete) operations, and also includes authentication features for secure access.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, Read, Update, and Delete tasks (CRUD operations).
- User authentication for secure access.
- Responsive design for various screen sizes.
- Easy-to-use and intuitive user interface.
- Fast and efficient development with Vite and React.

## Technologies

- **Frontend:**
  - React
  - Vite
  - React Router for routing
  - Axios for API requests
  - Bootstraps for UI components
  - Context for state management (optional)

- **Backend:**
  - Node.js
  - Express.js for REST API
  - MongoDB for data storage
  - bcrypt jwt for authentication

## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- Node.js: Download and install Node.js from [nodejs.org](https://nodejs.org/).
- MongoDB: Install MongoDB locally or use a cloud-based MongoDB service like MongoDB Atlas.

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/todo-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd todo-app
   ```

3. Install frontend dependencies:

   ```shell
   cd frontend
   npm install
   ```

4. Install backend dependencies:

   ```shell
   cd ../backend
   npm install
   ```

## Usage

### Running the Application

1. Start the backend server:

   ```shell
   cd backend
   npm start
   ```

   This will start the Node.js backend on `https://apiserve.onrender.com`./api/v1 endpoint 
   /login
   /register
   /logout
   
   

2. Start the frontend development server:

   ```shell
   cd frontend
   npm run dev
   ```

   This will start the Vite development server on `http://localhost:5173`.

3. Access the application in your web browser:

   Open your web browser and go to `http://localhost:5173` to access the Todo application.

## Authentication

The application includes user authentication powered by bcryt js Users can create accounts, log in, and log out. Ensure that you set up your MongoDB connection and configure Passport.js according to your authentication strategy and requirements.

## Contributing

Contributions to this project are welcome! Feel free to submit issues, suggest improvements, or create pull requests. Please follow the [contribution guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.