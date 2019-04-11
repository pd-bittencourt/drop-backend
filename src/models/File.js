const mongoose = require('mongoose')

// schema como se fosse uma tabela
const File = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }, 
  {
    // cria um campo chamado createdAt e updatedAt em cada registro
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
)

// campo virtual para exibir info para frontend diretamente
// precisa ser function normal para ter acesso ao this (se refere ao 'const File' registro de arquivo)
// encondeURIComponent - o texto fica em formato de URL
File.virtual('url').get(function(){
  return `http://localhost:3333/files/${encodeURIComponent(this.path)}`
})

module.exports = mongoose.model("File", File)