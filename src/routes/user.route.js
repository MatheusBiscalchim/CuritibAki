const route = require('express').Router();
const userController = require('../controllers/user.controller');
const {validId,validUser, validEmail} = require('../middlewares/global.middlewares');

route.post('/', userController.create);
route.get('/', userController.findAll);
route.get('/:email',validEmail, userController.findByEmail);
route.get('/:id',validId,validUser, userController.findById);
route.patch('/:id',validId,validUser, userController.update);
route.delete('/:id',validId, userController.deleteById);

module.exports =  route;