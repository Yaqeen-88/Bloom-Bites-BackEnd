const {Cake} = require ('../models')

const createACake= async (req,res) => {
  try {
    const cake = await Cake.create(req.body)
    res.status(201).send(cake)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred creating a cake! '
    })
  }
}
const getTheCakes = async (req, res) => {
  try {
    const cakes = await Cake.find({});
    res.status(200).send(cakes)
  } catch (error) {
    console.log(error)
    res.status(500).send({
      status: 'Error',
      msg: 'An error has occurred getting the cakes!'
    })
  }
}

const updateCake= async (req, res) => {
  try {
    const cake = await Cake.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(cake)
  } catch (error) {
    console.log(error)
    res.status(404).send({
      status: 'Error',
      msg: 'An error has occurred updating the cake!'
    })
  }
}

const deleteCake= async (req, res) => {
  try {
    await Cake.deleteOne({ _id: req.params.id});
    res.status(200).send({msg: 'Cake deleted', id: req.params.id })
  } catch (error) {
    console.log(error)
    res.status(404).send({
      status: 'Error',
      msg: 'An error has occurred deleting the cake'
    })
  }
}



module.exports = {
  createACake,
  getTheCakes,
  updateCake,
  deleteCake,
}
