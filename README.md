# Custom URL shortner WEB API

A simple URL Shortener built with Node.js, Express, and MongoDB following the MVC architecture.
It allows users to shorten URLs, redirect using the shortened link, and track the number of clicks.

## Features

Shorten a valid URL and get a unique short link.

Redirect users from the short link to the original URL.

Track analytics — total clicks for each short link.

Organized MVC structure for clean, maintainable code.

## API Routes
### 1. POST /url

Generates a new short URL.
Request Body:
<img width="1367" height="491" alt="image" src="https://github.com/user-attachments/assets/bb8bb9e5-ee33-4f8b-9123-85499a62ddbf" />

Response:
<img width="1351" height="332" alt="image" src="https://github.com/user-attachments/assets/a1dff969-400f-46ca-ab30-5f7a3384d8f8" />


### 2. GET /url/:id

Returns the user to the original URL based on the id.(can be used in our front end to redirect to the original url.

### 3. GET /url/analytics/:id

### 4. GET /url
Retunrs object array of all urls in the database


### Tech Stack

Node.js – Backend runtime

Express.js – Web framework

MongoDB – Database

Mongoose – ODM for MongoDB

Nanoid – For generating unique IDs

### Project Structure
├── controllers/    # Business logic
├── models/         # Mongoose schemas
├── routes/         # API route definitions
├── middlewares/    # Middleware functions
├── views/          # (Optional) Template files
├── index.js        # App entry point
└── connection.js   # MongoDB connection

How to Run

Clone the repository:

git clone <your-repo-url>


Install dependencies:

npm install



## Start the server:

npm start
OR
npm run dev(using nodemon)


Test the API using Postman or any HTTP client.

## MONGODB STRUCTURE
<img width="1911" height="986" alt="image" src="https://github.com/user-attachments/assets/d5f82cdd-3260-442c-b761-cfb311738634" />


Visit http://localhost:3000/xyz123 → redirects to original URL.

GET /url/analytics/xyz123 → see total click count.
