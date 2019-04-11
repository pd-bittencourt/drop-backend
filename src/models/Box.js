const mongoose = require('mongoose')

// schema como se fosse uma tabela
const Box = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    // vai armazenar os ids dos arquivos (fazendo relacionamento)
    files: [{type: mongoose.Schema.Types.ObjectId, ref: "File"}]
  }, 
  {
    // cria um campo chamado createdAt e updatedAt em cada registro
    timestamps: true
  }
)

module.exports = mongoose.model("Box", Box)