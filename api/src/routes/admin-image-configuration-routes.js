module.exports = (app, upload) => {
  const router = require('express').Router()
  const controller = require('../controllers/admin/image-configuration-controller.js')

  router.post('/', controller.create)
  router.get('/', controller.findAll)
  router.get('/:id', controller.findOne)
  router.put('/:id', controller.update)
  router.delete('/:id', controller.delete)

  app.use('/api/admin/image-configurations', router)
}
