# Guide to Run the Node.js Server
This guide will show you how to run the Node.js server for the task management application. The server is responsible for managing task data and exposes a REST API for the Flutter application. Ensure you have Node.js and MongoDB installed on your system before you begin.

# Prerequisite Setup
1. Install Node.js
If you don't have Node.js already installed, download and install the latest stable version.

2. Install MongoDB
Make sure MongoDB is installed on your system. After installation, ensure you start the MongoDB server.

# Running the Server
Follow these steps to run the Node.js server:

1. Download the Code
If you haven't already, download the source code of the Node.js server from the associated Git repository.

2. Install Dependencies
In the Node.js server directory, install the dependencies using npm (Node Package Manager).
run this command : npm install

4. Run the Server
Now, you can run the server. Use the following command: node server.js

After running this command, you should see a message indicating that the server is running on port 3000 (or the port you configured). This means the server is ready to receive requests from the Flutter application.

# Route Configuration
The server exposes the following routes:

- GET /todolist/tasks: Fetches the list of tasks.

- POST /todolist/tasks: Adds a new task.

- PUT /todolist/tasks/:id: Updates an existing task.

- DELETE /todolist/tasks/:id: Deletes a task.

# Database Connection
The server connects to the MongoDB database using the following URL: mongodb://127.0.0.1:27017/todolist. Ensure that your MongoDB server is running to enable the connection.
