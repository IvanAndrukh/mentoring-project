# Mentoring project

Simple REST project.

# Technologies which have been used:
* NodeJS
* Express
* MongoDB
* MySQL

# Requirements:
* Installed MongoDB - https://docs.mongodb.com/manual/installation/
* Started MongoDB server in replication mode
    *  You need to start 3 mongo servers on different ports:
        - mongod --port 27017 --dbpath "your_path_to_the_folder/MongoData/rs0" --replSet rsProject
        - mongod --port 27018 --dbpath "your_path_to_the_folder/MongoData/rs1" --replSet rsProject
        - mongod --port 27019 --dbpath "your_path_to_the_folder/MongoData/rs2" --replSet rsProject
    * Then connect to the mysql client: mongo;
    * Then initiate the replication: 
        -  rs.initiate(
            -  {
                -  _id: "rsProject",
                -  version: 1,
                -  members: [
                    -  { _id: 0, host : "localhost:27017" },
                    -  { _id: 1, host : "localhost:27018" },
                    -  { _id: 2, host : "localhost:27019" }
                -  ]
            -  }
        -  )

* Installed MySQL - https://dev.mysql.com/doc/refman/8.0/en/installing.html
* Started MySQL server

* Installed NodeJS and npm - https://nodejs.org/en/download/
* Defined `PROJECT_ENV_KEY` in configuration file for a terminal

# Setup project:
* git clone https://github.com/IvanAndrukh/mentoring-project.git - to download the project;
* `npm install` - to install all project dependencies
* `npm start` - run the server localy
* `npm run lint` - to run eslint
* `npm test` - to run tests



Runs the app in the development mode.
Open http://localhost:8000 to view it in the browser.

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
    
