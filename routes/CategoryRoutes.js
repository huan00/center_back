const router = require('express').Router()
const controller = require('../controllers/CategoryController')

// router.get('', (req, res) => {
//   res.send('Category Root')
// })

router.post('/new', controller.newCategory)

module.exports = router
