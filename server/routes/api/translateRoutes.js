const router = require('express').Router()

const { translate } = require('../../controllers/translateControllers')

router.route('/').post(translate)

module.exports = router
