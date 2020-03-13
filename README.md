# Mentoring project

Simple REST project.

# Technologies which have been used:
* NodeJS
* Express
* MongoDB
* MySQL

# Requirements:
* Installed Docker - https://docs.docker.com/install/
* Installed docker-compose - https://docs.docker.com/compose/install/
* Installed NodeJS and npm - https://nodejs.org/en/download/
* Defined `PROJECT_ENV_KEY` in configuration file for a terminal

# Setup project:
* git clone https://github.com/IvanAndrukh/mentoring-project.git - to download the project;
* `npm install` - to install all project dependencies
* `npm start` - run the server localy
* `npm run lint` - to run eslint
* `npm test` - to run tests 
* `secure-env .env -s $PROJECT_ENV_KEY` - to secure .env file 

# Configuration
* Create `.env` file - and pass variables here

| Environment variables           | Default value | Description           |
| --------------------------------| ------------- | --------------------- |
| `MYSQL_ROOT_PASSWORD`           | pass          | mysql root password   |
| `MYSQL_DATABASE`                | kindergarten  | mysql db name         |
| `MYSQL_USER`                    | admin         | mysql user name       |
| `MYSQL_PASSWORD`                | pass          | mysql root password   |


# Run locally
* `docker-compose up` - to start mysql db server and adminer
* `npm start` - to start Node server

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# Project tasks:

* SetUp Express project
    - Connect Mysql and MongoDb to the project
    - Add testing tools and test enviroment to the project
    - Create NodeJS presentation
    - Investigate REST specification, NPM 
    (done)
* (2020-02-03) Create db structure (MySQL/Mongo) for:
   - child
   - kindergarden teacher
   - group
   - posibility to assign miltiple children and up to 2 kindergarden teacher (at least one) to group
   - graphical representation of db 
   - API (RESTFULL) (include .../mysql... or .../mongodb...  into URL to specify which db is used) for CRUD 
    
