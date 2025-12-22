const {Flower} = require("../models")

const GetFlowers = async (req, res) => {
  try{
    const flowers = await Flower.find({})
    res.status(200).send(flowers)
  } catch (error) {
    console.log(error)
    res.status(500).send({
      status: 'Error',
      msg: "An Error has occurred getting flowers."
    })
  }
}

const CreateFlower = async (req, res) => {
  try{
    const flower = await Flower.create(req.body)
    res.status(201).send(flower)
  } catch (error) {
    console.log(error)
    res.status(400).send({
      status: "Error",
      msg: "An Error has occurred creating flowers!"
    })
  }
}

const UpdateFlower = async (req,res) => {
  try {
    const flower = await Flower.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).send(flower)
  } catch (error) {
    console.log(error)
    res.status(404).send({
      status: "Error",
      msg: "An Error has occurred updating flowers!"
    })
  }
}
 
const DeleteFlower = async (req, res) => {
  try {
    await Flower.deleteOne({_id: req.params.id})
    res.status(200).send({
      msg: "Flower deleted.",
      id: req.params.id
    })
  } catch (error) {
    console.log(error)
    res.status(404).send({
      status: "Error",
      msg: "An Error has occurred deleting flowers!"
    })
  }
}

module.exports = {
  GetFlowers,
  CreateFlower,
  UpdateFlower,
  DeleteFlower
}
