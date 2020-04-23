const express = require('express');
const cors = require('cors');

const app = express();

const logger = require('./common/logger');

const Sequelize = require('./db/mysql/sequalize');
const Mongoose = require('./db/mongo/mongoose');

const UserRouter = require('./app/user/router');

Sequelize.connect();
Mongoose.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(UserRouter);

app.listen(8000, () => logger.info('App listening on port 8000!'));
