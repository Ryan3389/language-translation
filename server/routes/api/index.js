const router = require('express').Router()
const translateRoutes = require('./translateRoutes')

router.use('/translate', translateRoutes)

module.exports = router