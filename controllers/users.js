const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res, next) {
  User
    .create(req.body)
    .then(() => res.json({ message: 'Registration successful' }))
    .catch(next);
}

function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) throw new Error('Unauthorized');
      // make a token
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      return res.json({ message: `Welcome back ${user.username}!`, token });
    })
    .catch(next);
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('artistFollowed paintingsUploaded')
    .exec()
    .then(user => {
      if(!user) throw new Error('Not Found'); // create a custom error
      return res.json(user);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  console.log('updateRoute user --->');
  User
    .findById(req.params.id)
    .exec()
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  show: showRoute,
  update: updateRoute,
  login,
  register
};
