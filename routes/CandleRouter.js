const router = require('express').Router()
const controller = require('../controllers/CandleController')
const middleware = require('../middleware')

router.get('/', controller.GetCandles)
//get specific candle
router.get('/:id', controller.GetCandleById)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  controller.CreateCandle
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  controller.UpdateCandle
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  controller.DeleteCandle
)

module.exports = router
