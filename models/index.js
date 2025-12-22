const mongoose = require('mongoose')
const userSchema = require('./User')
const candleSchema = require('./candle')
const orderSchema = require('./Order')

const User = mongoose.model('User', userSchema)
const Candle = mongoose.model('Candle', candleSchema)
const Order = mongoose.model('Order', orderSchema)


module.exports = {
  User,
  Candle,
  Order
}
