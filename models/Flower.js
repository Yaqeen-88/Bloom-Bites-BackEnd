const { Schema } = require("mongoose")

const flowerSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  stock: { type: Number, min:0 },
  color: { type: String, required: true },
  flowerArrangement: { type: String },
  price: { type: Number, required: true },
  image: { type: String, required: true },
})

module.exports = flowerSchema
