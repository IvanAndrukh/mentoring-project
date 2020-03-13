const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Sequelize = require('./db/mysql/sequalize');
// const { mongoDbUrl } = require('./config');

const app = express();

Sequelize.connect();
// mongoose.connect(mongoDbUrl, { autoReconnect: true, useNewUrlParser: true, replicaSet: 'rsProject' })
//   .then(() => console.log('Successfully connected to MongoDB'))
//   .catch(err => console.log('Failed connecting to MongoDB', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(8000, () => console.log('App listening on port 8000!'));
