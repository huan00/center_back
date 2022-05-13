const router = require('express').Router()
const controller = require('../controllers/MessageController')

// router.get('', (req, res) => {
//   res.send('message ROOT!!')
// })
router.get('/messagemood/:id', controller.getMessageMood)
router.get('/messagedetail/:id', controller.getMsgRateCate)
router.get('/noneprivate', controller.getAllMessageMood)
router.get('/private/:id', controller.getPrivateMessage)
router.get('/msgtomsg/:id', controller.getMsgToMsg)

router.post('/new', controller.newMessage)
router.post('/newjoinmessage', controller.JoinmessageMood)
router.post('/messageMood/:id', controller.messageMood)
router.post('/msgtomsg/:id', controller.postMsgToMsgComment)

module.exports = router
