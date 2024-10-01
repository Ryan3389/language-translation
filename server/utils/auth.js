require('dotenv').config()
const jwt = require('jsonwebtoken')

const secret = process.env.SECRET
const expiration = '2h'

const signToken = ({ firstName, lastName, email, _id }) => {
    const payload = { firstName, lastName, email, _id }
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
}

module.exports = { signToken }