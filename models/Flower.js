const { Schema } = require("mongoose")

const flowerSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  stock: { type: Boolean, default: true },
  flowerType: { type: String, required: true },
  color: { type: String, required: true },
  flowerArrangement: { type: String },
  price: { type: Number, required: true },
  image: { type: String, required: true },
})

module.exports = flowerSchema
