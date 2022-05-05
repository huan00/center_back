const router = require('express').Router()
const controller = require('../controllers/UserController') //require the controller file for the model
// const middleware = require('../middleware')

// router.get('', (req, res) => {
//   res.send('this is ROOT')
// })
//////GET/////
router.get('/userfollowing', controller.getUserFollowing)
router.get('/message/:id', controller.getUserMessage)
router.get('/detail/:id', controller.getUserDetail)

//////POST/////
router.post('/signup', controller.signUp)
router.post('/following/:id', controller.followUser)
router.post('/followmessage/:id', controller.followMessage)

module.exports = router
