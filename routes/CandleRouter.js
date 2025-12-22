const router = require('express').Router()
const controller = require('../controllers/CandleController')
const middleware = require('../middleware')

router.get('/', controller.GetCandles)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCandle
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCandle
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCandle
)

module.exports = router
