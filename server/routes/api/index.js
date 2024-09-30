const router = require('express').Router()
const translateRoutes = require('./translateRoutes')

router.use('/test', translateRoutes)

module.exports = router