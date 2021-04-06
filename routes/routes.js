const router = require('express').Router();
const usersController = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.post('/register', usersController.register);
router.post('/login', usersController.login);

router.route('/user/:id')
  .get(secureRoute, usersController.show)
  .put(secureRoute, usersController.update);

router.route('/*')
  .all((req, res) => res.sendStatus(404));

module.exports = router;
