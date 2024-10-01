const router = require('express').Router()
const translateRoutes = require('./translateRoutes')
const userRoutes = require('./userRoutes')

router.use('/translate', translateRoutes)
router.use('/user', userRoutes)

module.exports = router