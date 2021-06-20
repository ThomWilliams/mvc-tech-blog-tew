# Homework 14: MVC Blog: "Star Tech"

![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description

Star Tech is a CMS-style blog site. The app allows users to post blogs and comments, read blogs, edit blogs and delete blogs. 

The app follows the MVC paradigm in structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

The user can signup and login to access features.

View individual blogs via the homepage. 

Enter comments on the individual blog pages.

Create, edit and delete blogs on the dashboard.

It has been deployed on Heroku.

Screenshots off the app are also included below.


## Installation

The app works in any browser at the deployed link below.

However, to install the project please clone the repo from GitHub and use the following package manager:

- enter 'npm init' and 'npm i' in the terminal to install all packages.

- Or please ensure all dependencies and dev dependencies are installed (npm install {package}).

- Dependencies: brcrypt, connect-session sequelize, dotenv, express, express-handlebars, express-session, mysql2, nodemon, sequelize.

- enter 'node seed/seeds.js' to run all seed data for the blogs.


## Usage

Download, install NPM packages, enter npm run dev / node server.js / nodemon server.js to activate server on Port 3001 and run the app.

## Technologies Used

- The app uses Node.js and Express.js to create a RESTful API.

- The app uses Handlebars.js as a template engine, with a main handlebars template, then individual templates to render displays for multiple blogs, a single blogs with user comments, the dashboard, sign-up, and login.

- MySQL and the Sequelize ORM (Object Relational Mapping) to connect the app to the techblog_db database storing all of the user inputted data.

- The app uses GET routes to retrieve data (to render single blogs, multiple blogs), POST routes (for retrieving and adding new data from seeds and user created outfits), PUT routes (to enable editing) plus DELETE routes to remove unwanted blogs.

- Security features include the use of Login Authentication from the npm express-session package, hooks (withAuth middleware) and cookies. Environment variables safely store API keys and sensitive information protected (.env files).

- CSS & HTML - Give the app it's polished UI, mobile responsiveness, and design features.

- The app has been deployed live via Heroku.

## Contributing

To contribute further on this project please contacts the repo owners at the GitHub account below. Directions for future development are also highlighted as below.

## Tests

All routes tested in Insomnia during development process. Further testing with jest package proposed for future development.

## Questions

For any further questions, please contact GitHub user:
[Thom Williams](https://www.github.com/ThomWilliams/)

Or for direct enquiries please email the follower developer address:
thomwilliams1990@gmail.com

## Screenshots

![Dashboard](/public/images/dashboard.png)

![Homepage](/public/images/homepage.png)

![Create Blog](/public/images/create_blog.png)

![Delete / Edit Blog](/public/images/delete_edit.png)

![ Comments ](/public/images/comments.png)


## Deployment / Links

- Heroku: [Heroku](https://serene-chamber-97267.herokuapp.com/)

- Project Repository: [GitHub](https://github.com/ThomWilliams/mvc-tech-blog-tew)

- Issue tracker: [GitHub Issues](https://github.com/ThomWilliams/mvc-tech-blog-tew/issues)

## License

MIT

Copyright (c) [2021] [Star-Tech]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.





