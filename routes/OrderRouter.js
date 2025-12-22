const router = require('express').Router()
const controller = require('../controllers/OrderController')
const middleware = require('../middleware')

router.get('/', controller.GetOrders)
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
  controller.UpdateOrder
)

router.delete(
  ':/id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteOrder
)

module.exports = router
