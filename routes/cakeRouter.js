const router = require('express').Router()
const controller = require('../controllers/CakeController')
const middleware = require('../middleware')

router.get('/', controller.getTheCakes)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  controller.createACake
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  controller.updateCake
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  controller.deleteCake
)

module.exports = router
