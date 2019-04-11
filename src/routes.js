const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const BoxController = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')

const routes = express.Router()

routes.post('/boxes', BoxController.store)
routes.get('/boxes/:id', BoxController.show)

routes.post(
  // parametro dentro da rota
  '/boxes/:id/files', 
  multer(multerConfig).single('file'), 
  FileController.store
)

// exporta alguma info do arquivo (normalmente 1 module.export por arquivo)
module.exports = routes

// routes.get('/teste', (req, res) => {
//   return res.send('Hello rocketseat')
// })

// MVC
// models é a abstracao das tabelas do db em formato js (table users no db = model users ) representacao de uma tabela na organizacao dos arquivos
// controlers onde ficam as regras de negocio (recebem as requisicoes)
// view não tem --> react / react native

// nodemon monitora as modificações e restarta o servidor

// mongoDB - nao permite muitos tipos de relacionamentos – neste app 2 entidades (boxes e arquivos dentro das pastas)
// Postgre - mais relacionamentos
// monfodb.atlas – cluster são servidores
// mongoose - abstrair o banco de dados (forma da gente conseguir utilizar apenas js para tratar o banco de dados)