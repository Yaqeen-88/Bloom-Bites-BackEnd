const mongoose = require('mongoose')
const userSchema = require('./User')
const candleSchema = require('./candle')
const flowerSchema = require('./Flower')
const cakeSchema = require('./Cake')
const orderSchema = require('./Order')

const User = mongoose.model('User', userSchema)
const Candle = mongoose.model('Candle', candleSchema)
const Flower = mongoose.model('Flower', flowerSchema)
const Cake = mongoose.model('Cake', cakeSchema)
const Order = mongoose.model('Order', orderSchema)


module.exports = {
  User,
  Candle,
  Flower,
  Cake,
  Order
}
