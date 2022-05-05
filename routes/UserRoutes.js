const router = require('express').Router()
const controller = require('../controllers/UserController') //require the controller file for the model
// const middleware = require('../middleware')

// router.get('', (req, res) => {
//   res.send('this is ROOT')
// })

router.post('/signup', controller.signUp)

module.exports = router
