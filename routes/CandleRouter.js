const router = require('express').Router()
const controller = require('../controllers/CandleController')
const middleware = require('../middleware')

router.get('/candles', controller.GetCandles)
router.post(
  '/candles',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCandle
)

router.put(
  '/candles/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCandle
)

router.delete(
  '/candles/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCandle
)

module.exports = router
