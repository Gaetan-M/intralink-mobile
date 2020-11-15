# intralink-mobile
mobile app for intralink project

## Features

- View actuality of your organisation
- Discussion tchat module
- Documentation module  
- Classe Module

## Tech

### Front End

- [React Native](https://reactnative.dev/) - JavaScript UI Library
- [Expo](https://expo.io/) - JavaScript UI Library
- [React-Navigation](https://reactnavigation.org/) - Navigation
- [Sass Styling](https://sass-lang.com/) - Styling
- [Jest](https://jestjs.io/) - JavaScript Testing Framework

### Back End

- [Express](https://expressjs.com/) - Web Framework for Node.js
- [MongoDB](https://mongodb.com/) - No Relational Database
- [Redis](https://redis.io/) - In-Memory Data Structure Store used for Authorization

## Team

- Front End Lead - [Angelo](https://github.com/angeloDiepe) Fullstack
- Back End Lead - [Gaetan](https://github.com/Gaetan-M) Fullstak
- Designer/ Styling Lead - [Delphine](https://github.com/Delphi-943)
- Full Stack-developper- [Meli](https://github.com/LoicMeli)

---

## Running Locally in Development Mode

To get started with the front end, fork the repository and run the following commands:

    npm install
    npm start 
                     or
    expo start
if permission issue found run with prefix sudo. Ex

    sudo npm install

## Building and Deploying in Production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

## Running Test in Development Mode

If you are the first time to start the tests, run the following command to ensure all related packages installed:

    npm install

To get started with Unit Test, run the following command:

    npm run test
