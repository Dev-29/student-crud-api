# Student API

This is a simple CRUD (Create, Read, Update, Delete) REST API for managing student records. It is built using Node.js, Express, MongoDB and Docker.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [API Endpoints](#api-endpoints)
- [Dockerization](#dockerization)

## Prerequisites

Before getting started, make sure you have the following software installed on your machine:

- Node.js (version 14 or higher)
- MongoDB (make sure the MongoDB server is running)

## Getting Started

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Dev-29/student-api.git
   cd student-api
2. Install dependencies:
    ```
    npm install
    ```
### Running Locally
To run the application locally, follow these steps:
1. Start the MongoDB server.
2. Run the application:
    ```
    npm start
    ```
## API Endpoints
The following are the available API endpoints:
- `POST /students`: Create a new student record.
- `GET /students`: Get all student records.
- `GET /students/:id`: Get a specific student record by ID
- `PUT /students/:id`: Update a student record.
- `DELETE /students/:id`: Delete a student record.

## Dockerization
This application can be Dockerized for easy deployment. Follow these steps to build and run a Docker container:
1. Build the docker image:
    ```
    docker build -t student-api .
    ```
2. Run the Docker container:
    ```
    docker run -d -p 3000:3000 student-api
    ```



