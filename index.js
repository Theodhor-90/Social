
const express = require('express');
const routes = require('./routes/routes');
const errorHandler = require('./lib/errorHandler');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


const app = express();

const { port, dbURI } = require('./config/environment');


mongoose.connect(dbURI);


app.use(express.static(`${__dirname}/public`));


app.use('/api', routes);

app.use(errorHandler);

app.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
