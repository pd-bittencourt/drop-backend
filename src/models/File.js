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
    timestamps: true
  }
)

module.exports = mongoose.model("File", File)