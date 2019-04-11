const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-wqbm5.mongodb.net/omnistack?retryWrites=true', {
  useNewUrlParser: true
})
// middlewares é uma função que recebe requisição e modifica ou retorna uma resposta. Interceptador
// app.use é quando quero cadastrar um modulo dentro do express
// urlencoded permite envio de arquivos

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// redirect - toda vez que o user acessar a rota files, o servidor vai buscar os arquivos que tem na pasta 'tmp'
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'))

// vars ambiente: podem sobrescrever infos dentro da app dependendo do ambiente que estamos usando
// a var PORT é definida automaticamente pelo heroku (process.event.PORT || )
app.listen(3333)
