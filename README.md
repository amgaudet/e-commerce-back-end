# E-Commerce Back End

## Contents
1. [About](#About)
2. [Description](#Description)
3. [Installation](#Installation)
4. [Contact-Info](#Contact-Info)
5. [License](#License)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About
This app emulates the back end function of an e-commerce company. The application is set up to provide the user with seed data and routes to add, delete items or categories and update item quantities, titles etc.

## Description
The models in this app are set up using sequelize. Models are set up on pre-given information and seeded. Routes are set up to the api for all categories, products, and tags. User can use insomnia or similar application to use CRUD functionality for each model. Products and tags are linked together via a ProductTag model with corresponding columns.


## Installation
After cloning repository to your machine, be sure to check the package.json file for node dependencies. Use command npm install in your command prompt to install all dependencies quickly. Once installed, be sure to run your schema in the db folder, then use the "npm run seed" command to seed the models with your data. Use the command "npm start" to run application.


## Contact-Info
Alan Gaudet - <alanmgaudet@gmail.com>

Portfolio - <https://github.com/amgaudet>

## License
MIT License

Copyright (c) 2021 Alan Gaudet

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
