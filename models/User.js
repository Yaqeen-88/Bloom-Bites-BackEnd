const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    role: {type: String, enum: ['customer', 'admin'] ,default: 'customer'}
  },
  { timestamps: true }
)

module.exports = userSchema
