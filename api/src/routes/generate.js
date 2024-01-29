const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Introduce el valor de variable1: ', (variable1) => {
  rl.question('Introduce el valor de variable2: ', (variable2) => {
    const content = `module.exports = (app, upload) => {
  const router = require('express').Router()
  const controller = require('../controllers/admin/${variable2}-controller.js')

  router.post('/', controller.create)
  router.get('/', controller.findAll)
  router.get('/:id', controller.findOne)
  router.put('/:id', controller.update)
  router.delete('/:id', controller.delete)

  app.use('/api/admin/${variable1}', router)
}
`

    const fileName = `admin-${variable2}-routes.js`

    fs.writeFile(fileName, content, (err) => {
      if (err) throw err
      console.log(`Archivo generado: ${fileName}`)
      rl.close()
    })
  })
})
