const mongoose = require('mongoose')
const userSchema = require('./User')
const candleSchema = require('./candle')

const User = mongoose.model('User', userSchema)
const Candle = mongoose.model('Candle', candleSchema)


module.exports = {
  User,
  Candle
}
