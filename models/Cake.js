const { Schema } = require('mongoose')

const cakeSchema = new Schema(
  {

    name: {
      type: String,
      required: true
    },

    flavour:{
      type: String,
      required: true
    },

    description: {
      type: String,
    },

    stock: {
      type: Number,
      min:1,
      },

      price: {
      type: Number,
      required: true,
      },

      image: {
      type: String,
      required: true,
      },
  },

)

module.exports = cakeSchema
