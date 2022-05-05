const router = require('express').Router()
const controller = require('../controllers/UserController') //require the controller file for the model
// const middleware = require('../middleware')

// router.get('', (req, res) => {
//   res.send('this is ROOT')
// })
router.get('/userfollowing', controller.getUserFollowing)

router.post('/signup', controller.signUp)
router.post('/following/:id', controller.followUser)

module.exports = router
