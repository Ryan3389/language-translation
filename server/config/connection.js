require('dotenv').config()
const { connect, connection } = require("mongoose")

connect(proces.env.DB_URL);

module.exports = connection