const { Schema, default: mongoose } = require("mongoose")

const orderSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      productType: {type: String, enum:['cakes', 'flowers', 'candles']},
      productId: { type: mongoose.Schema.Types.ObjectId },
      productName: { type: String },
      productImage: { type: String },
      price: { type: Number, required: true },
      quantity: { type: Number }
    }
  ],
  total: { type: Number },
  status: { type: String, enum: ['pending', 'paid', 'processing', 'delivered', 'cancelled'] },
  createdAt: { type: Date }
})

module.exports = orderSchema
