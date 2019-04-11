const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-wqbm5.mongodb.net/omnistack?retryWrites=true', {
  useNewUrlParser: true
})
// middlewares é uma função que recebe requisição e modifica ou retorna uma resposta. Interceptador
// app.use é quando quero cadastrar um modulo dentro do express
// urlencoded permite envio de arquivos

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

app.listen(3333)