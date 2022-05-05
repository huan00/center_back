const router = require('express').Router()
const controller = require('../controllers/MessageController')

// router.get('', (req, res) => {
//   res.send('message ROOT!!')
// })
router.get('/messagecategory/:id', controller.getMessageCategory)
router.get('/ratingcategory/:id', controller.getMsgRateCate)

router.post('/new', controller.newMessage)
router.post('/messagecategory/:id', controller.messageCategory)

module.exports = router
