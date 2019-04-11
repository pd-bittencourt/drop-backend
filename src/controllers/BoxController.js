const Box = require('../models/Box')

class BoxController {
  async store(req, res) {
    // pode ser Box.create({title: req.body.title})
    const box = await Box.create(req.body)

    return res.json(box)
  }

  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: 'files',
      options: {sort: { createdAt: -1 } }
    })

    return res.json(box)
  }
}

// como o controller consegue acessar os arquivos vindos do front
// retornar a instancia da classe para acessar os métodos da classe
module.exports = new BoxController()