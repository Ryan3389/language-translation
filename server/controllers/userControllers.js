const User = require('../models/User')
const { signToken } = require('../utils/auth')

const signUp = async (req, res) => {
    try {
        const user = await User.create(req.body)

        if (!user) {
            return res.status(400).json({ message: 'Something went wrong' })
        }

        const token = signToken(user)

        res.status(200).json({ user, token })
    } catch (error) {
        console.error('Error, user signup: ', error)
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.satus(404).json({ message: 'Invalid credentials' })
        }

        const checkPw = await user.isCorrectPassword(req.body.password)

        if (!checkPw) {
            return res.status(404).json({ message: 'Invalid credentials' })
        }

        const token = signToken(user)

        res.status(200).json({ user, token })
    } catch (error) {
        console.error('User login error: ', error)
    }
}

module.exports = { signUp, login }