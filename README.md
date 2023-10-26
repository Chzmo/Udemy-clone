# Udemy Clone Project

This is a clone of Udemy, built using ReactJS + Vite, Prisma, Express, and Node.js. It is a web application that allows users to browse and purchase online courses.

## Screenshot

![Screenshot](./Screenshots/Screenshot%20(12).png)

## Installation

1. Clone the repository.
2. Run `npm install` in both the root directory and the `API` directory.
3. Create a `.env` file in the API directory and add the following variables:
4. Run `npm run dev` to start the server and `API`.

```
    DATABASE_URL="file:./dev.db"
    PORT=8000
    JWT_SECRET="YOUR_SECRET_KEY"
```

5. Create a `.env` file in the root directory and add the following variables:

```
   VITE_APP_BASE_URL = 'http://localhost:8000'
   VITE_OAUTH_CLIENT_ID = 'YOUR GOOGLE OAUTH CLIENT ID'
```

6. Run `npm run dev` to start the server in both `root` and `API` directory.
## Technologies Used

- ReactJS
- Vite
- Prisma
- Express
- Node.js
- SQLite
- JSON Web Tokens (JWT)

## Features

- User authentication and authorization
- Course browsing and filtering
- Course details and purchasing
- User profile and course history

## Usage

- Home Page: The home page displays a list of featured courses and allows users to browse all courses.
- Authentication: Users can sign up or log in to access their account.
- Course Details: Clicking on a course will display more information about it, including its price and a button to purchase it.
- Purchasing: Users can purchase courses and view their course history on their profile page.

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow the steps below:

1. Fork this repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

## License

This project is licensed under the MIT License.
