const router = require('express').Router()
const controller = require('../controllers/CakeController')
const middleware = require('../middleware')

router.get('/cake', controller.getTheCakes)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createACake
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateCake
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteCake
)

module.exports = router
