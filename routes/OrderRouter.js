const router = require('express').Router()
const controller = require('../controllers/OrderController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetOrders
)

// admin get route
router.get(
  '/all',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  controller.GetAllOrders
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateOrder
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  controller.UpdateOrder
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  controller.DeleteOrder
)

module.exports = router
