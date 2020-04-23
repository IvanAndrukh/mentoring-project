const express = require('express');
const cors = require('cors');

const logger = require('./common/logger');

const Sequelize = require('./db/mysql/sequalize');
const Mongoose = require('./db/mongo/mongoose');

const app = express();

Sequelize.connect();
Mongoose.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(8000, () => logger.info('App listening on port 8000!'));
