const { Order } = require("../models")

const GetOrders = async (req, res) => {
  try {
    //testing out if I can use id from the payload
    const userId = res.locals.payload.id

    const orders = await Order.find({ user: userId })
    res.status(200).send(orders)
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 'Error', msg: 'An error has occured getting orders.' })
  }
}

// this is only for the admin to use
const GetAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
    res.status(200).send(orders)

  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 'Error', msg: 'An error has occurred getting all orders' })
  }
}

const CreateOrder = async (req, res) => {
  try{
    //testing out if I can use id from the payload
    const userId = res.locals.payload.id

    const order = await Order.create(
      {
      user: userId,
      items: req.body.items,
      total: req.body.total,
      status: 'pending',
      createdAt: new Date()
    }
  )
    res.status(201).send(order)
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: 'Error', msg: 'An error has occurred creating the order.' })
  }
}

const UpdateOrder = async (req, res) => {
  try {
    const userId = res.locals.payload.id

    const order = await Order.findOneAndUpdate(
      {_id: req.params.id, user: userId },
      req.body,
      { new: true }
    )
    res.status(200).send(order)
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: 'Error', msg: 'An error has occurred updating the order.' })
  }
}

const DeleteOrder = async (req, res) => {
  try {
    const userId = res.locals.payload.id

    await Order.findOneAndDelete({_id: req.params.id, user: userId })
    res.status(200).send({ msg: "Order Deleted.", id: req.params.id })
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: 'Error', msg: 'An error has occurred deleting the order. ' })
  }
}

module.exports = {
  GetOrders,
  GetAllOrders,
  CreateOrder,
  UpdateOrder,
  DeleteOrder
}
