# Mentoring project

REST project that allows manage kindergarten.

# Technologies which have been used:
* NodeJS
* Express
* MongoDB
* MySQL

# Requirements:
* Downloaded project - `git clone https://github.com/IvanAndrukh/mentoring-project.git`;
* Installed Docker - https://docs.docker.com/install/
* Installed docker-compose - https://docs.docker.com/compose/install/
* Installed NodeJS and npm - https://nodejs.org/en/download/

# Configuration
* Create `.env` file - and pass variables here

| Environment variables           | Default value | Description           |
| --------------------------------| ------------- | --------------------- |
| `MYSQL_ROOT_PASSWORD`           | pass          | mysql root password   |
| `MYSQL_DATABASE`                | kindergarten  | mysql db name         |
| `MYSQL_USER`                    | admin         | mysql user name       |
| `MYSQL_PASSWORD`                | pass          | mysql root password   |
| `MONGO_HOST`                    | localhost     | mongo host            |
| `MONGO_PORT`                    | 27017         | mongo port            |
| `MONGO_NAME`                    | kindergarten  | mongo db name         |

# Setup project and run locally:
* `npm install` - to install all project dependencies
* `docker-compose up` - to start mysql and mongo dbs servers and adminer
* `npm run migrations:up` - to execute MYSQL migrations
* `npm start` - to start Node server

# Additional commands:
* Installed Robo3T to have access to MongoDb data - https://robomongo.org/
* Use Adminer to have access to MYSQL data  http://localhost:3031
* `npm run migrations:down` - to drop all migrations

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
    
