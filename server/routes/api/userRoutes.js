const router = require('express').Router()

const { signUp, login } = require('../../controllers/userControllers')

router.route('/').post(signUp)
router.route('/login').post(login)

module.exports = router