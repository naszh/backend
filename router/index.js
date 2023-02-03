const Router = require('express').Router;
const userController = require('../controllers/user');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router;