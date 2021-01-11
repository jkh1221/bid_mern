require('dotenv').config();

module.exports = {
  DB : process.env.DB,
  HOST : process.env.HOST,
  USER : process.env.USER,
  PASSWORD : process.env.PASSWORD,
}