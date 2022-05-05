const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const app = express()

const UserRouter = require('./routes/UserRoutes')
const MessageRouter = require('./routes/MessageRoutes')
const CategoryRouter = require('./routes/CategoryRoutes')
const RatingRouter = require('./routes/RatingRoutes')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/users', UserRouter) //connect the /user to user routes from route folder
app.use('/messages', MessageRouter)
app.use('/categories', CategoryRouter)
app.use('/ratings', RatingRouter)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
