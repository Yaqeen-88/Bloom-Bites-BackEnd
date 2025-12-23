const mongoose = require('mongoose')
const userSchema = require('./User')
const candleSchema = require('./candle')
const cakeSchema = require('./Cake')

const User = mongoose.model('User', userSchema)
const Candle = mongoose.model('Candle', candleSchema)
const Cake = mongoose.model('Cake', cakeSchema)


module.exports = {
  User,
  Candle,
  Cake,
}
