const Controller = require('../Controller/controller');
const router = require('express').Router()

//  ======User Routes ===========

//post signup user
router.post('/', Controller.postSignup);

//post login user
router.post('/login', Controller.getLoginUser)

//post updated user
router.post('/update/:id', Controller.PostUpdatedUser);

//post delete user
router.post('/remove/:id', Controller.postDelete);



// ========Subscription Routes=========


module.exports = router;