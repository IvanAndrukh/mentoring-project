const express = require('express');
const mongoose = require('mongoose');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoDbUrl, mysqlPass } = require('./config');

const app = express();

const sequelize = new Sequelize('sqlDb', 'root', mysqlPass, {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Successfully connected to  MySQL DB'))
  .catch(err => console.log('Failed connecting to MySQL DB', err));

mongoose.connect(mongoDbUrl, { autoReconnect: true, useNewUrlParser: true, replicaSet: 'rsProject' })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.log('Failed connecting to MongoDB', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(8000, () => console.log('App listening on port 8000!'));
