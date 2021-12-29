# react-quiz
A react native quiz app

# App Architecture
- client (contains react Native App code)
- server (contains nodejs code)

# How to run
In this project you can run either using docker or manually. I will explain the both process

# How to run using docker
Navigate to the root folder and run the `sh start.sh` in your terminal. It will build and run the server and database in docker container and later it will start the native app client.

# How to run manually
To run the services manually and seprately you need to run your own mysql server and change db credentials in the `server/request.js` file. We will move this to .env later
In the client folder react native app contains. First we have to navigate to client folder. In the root folder of the repo you can run the below commands to run the app.
- `cd client && yarn install` or `cd client && npm install`
- `npm start`

To Run backend nodejs app navigate to backend folder. In the root folder you can the below command.
- `cd server && npm install` 
- `node request.js`


# How to run tests
- `cd client && npm test`

# Limitations and Future Improvements
- Using the state management library in more structured way for more features
- Backend app could have been configured for using .env so staging, production and development environment setup gets easy