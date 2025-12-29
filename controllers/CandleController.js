const { Candle } = require("../models")

const GetCandles = async (req, res) => {
  try {
    const candles = await Candle.find({})
    res.status(200).send(candles)
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: 'Error', msg: 'An error has occurred getting candles.' })
  }
}

const CreateCandle = async (req, res) => {
  try {
    const candle = await Candle.create(req.body)
    res.status(201).send(candle)
  } catch (error) {
    console.log(error)
    res.status(400).send({ status: 'Error', msg: 'An error has occurred creating candle!' })
  }
}

const GetCandleById = async (req, res) => {
  try {
    const candle = await Candle.findById(req.params.id)
    if(!candle) {
      res.status(404).send({status: "Error", msg: "Candle not found"})
    }
    res.status(200).send(candle)
  } catch (error) {
    console.log(error);
    res.status(400).send({status: "Error", msg: "An error has occurred getting candle"})
  }
}

const UpdateCandle = async (req, res) => {
  try {
    const candle = await Candle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).send(candle)
  } catch (error) {
    console.log(error)
    res.status(404).send({ status: 'Error', msg: 'An error has occurred updating candle!' })
  }
}

const DeleteCandle = async (req, res) => {
  try {
    await Candle.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: "Candle gone.", id: req.params.id })
  } catch (error) {
    console.log(error)
    res.status(404).send({ status: 'Error', msg: 'An error has occurred deleting candle.' })
  }
}

module.exports = {
  GetCandles,
  GetCandleById,
  CreateCandle,
  UpdateCandle,
  DeleteCandle,
}
