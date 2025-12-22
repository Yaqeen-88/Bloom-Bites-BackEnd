const { Order } = require("../models")

const GetOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
    res.status(200).send(orders)
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 'Error', msg: 'An error has occured getting orders.' })
  }
}

const CreateOrder = async (req, res) => {
  try{
    const order = await Order.create(req.body)
    res.status(201).send(order)
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: 'Error', msg: 'An error has occurred creating the order.' })
  }
}

const UpdateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).send(order)
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: 'Error', msg: 'An error has occurred updating the order.' })
  }
}

const DeleteOrder = async (req, res) => {
  try {
    await Order.deleteOne({_id: req.params.id })
    res.status(200).send({ msg: "Order Deleted.", id: req.params.id })
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: 'Error', msg: 'An error has occurred deleting the order. ' })
  }
}

module.exports = {
  GetOrders,
  CreateOrder,
  UpdateOrder,
  DeleteOrder
}
