const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
  // destino dos arquivos enviados
  dest: path.resolve(__dirname, '..', '..', 'tmp'),
  // pode armazenar arquivos no db, na pasta/disco, cloud
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp'))
    },
    // nome unico para o arquivo
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)
        file.key = `${hash.toString('hex')}-${file.originalname}`
        cb(null, file.key)
      })
    }
  })
}