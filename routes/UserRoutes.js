const router = require('express').Router()
const controller = require('../controllers/UserController') //require the controller file for the model
const middleware = require('../middleware')

// router.get('', (req, res) => {
//   res.send('this is ROOT')
// })
//////GET/////
router.get('/userfollowing', controller.getUserFollowing)
router.get('/message/:id', controller.getUserMessage)
router.get('/detail/:id', controller.getUserDetail)

//////POST/////
//auth
router.post('/signup', controller.signUp)
router.post('/login', controller.login)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
router.post(
  '/update/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateUser
)

router.delete(
  '/delete/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteUser
)

router.post('/createmood/:id', controller.createMood)
router.post('/following/:id', controller.followUser)
router.post('/followmessage/:id', controller.followMessage)

module.exports = router
