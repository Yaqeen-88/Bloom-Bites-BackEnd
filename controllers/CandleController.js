const { Candle } = require("../models")

const GetCandles = async (req, res) => {
  try {
    const candles = await Candle.find({})
    res.status(200).send(candles)
  } catch (error) {
    throw error
  }
}

const CreateCandle = async (req, res) => {
  try {
    const candles = await Candle.create(req.body)
    res.status(200).send(candles)
  } catch (error) {
    throw error
  }
}

const UpdateCandle = async (req, res) => {
  try {
    const candles = await Candle.findbyIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).send(candles)
  } catch (error) {
    throw error
  }
}

const DeleteCandle = async (req, res) => {
  try {
    await Candle.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: "Candle gone.", id: req.params.id })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCandles,
  CreateCandle,
  UpdateCandle,
  DeleteCandle,
}
