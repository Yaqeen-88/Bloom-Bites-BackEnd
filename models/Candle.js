const { Schema } = require("mongoose")

const candleSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, min: 0, max: 8 },
  shape: { type: String },
  scent: { type: String },
  price: { type: Number, required: true },
  image: { type: String, required: true },
})

module.exports = candleSchema
