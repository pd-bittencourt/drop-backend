const Box = require('../models/Box')
const File = require('../models/File')

class FileController {
  async store(req, res) {
    // console.log(req.file) --old
    // return res.send('OK') --old
    // salvar no banco
    const box = await Box.findById(req.params.id)

    const file = await File.create({
      title: req.file.originalname,
      path: req.file.key
    })

    // no Box.js box.files é um array - adicionamos o file ao array
    box.files.push(file)

    await box.save()

    return res.json(file)
  }
}

module.exports = new FileController()