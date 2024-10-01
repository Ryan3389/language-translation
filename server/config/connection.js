require('dotenv').config()
const { connect, connection } = require("mongoose")

connect(process.env.DB_URL);

module.exports = connection