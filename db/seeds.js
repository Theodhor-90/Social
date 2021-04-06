const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
Promise.promisifyAll(mongoose);

const { dbURI } = require('../config/environment');

const User = require('../models/user');


let seededUsers = [];

mongoose.connectAsync(dbURI)
  .then(db => db.dropDatabase())
  .then(() => User.create({
    username: 'Aviv',
    email: 'aviv@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass'
  },{
    username: 'Theodhor',
    email: 'theodhor@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass'
  },{
    username: 'James',
    email: 'james@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass'
  }))
  .then((users) => seededUsers = users)
  
  .then(() => console.log(seededUsers))

  .then(() => console.log('***** Database seeded! *****'))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
