const router = require("express").Router()
const controller = require('../controllers/FlowerController')
const middleware = require('../middleware')


router.get('/', controller.GetFlowers)
router.post('/', middleware.stripToken, middleware.verifyToken, middleware.isAdmin, controller.CreateFlower)
router.put('/:id', middleware.stripToken, middleware.verifyToken, middleware.isAdmin, controller.UpdateFlower)
router.delete('/:id', middleware.stripToken, middleware.verifyToken, middleware.isAdmin, controller.DeleteFlower)

module.exports = router
