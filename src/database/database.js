const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://localhost:27017/paletas-db';

function connectToDatabase() {
   mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true, /* Para a monitoração do banco de dados */
   }).then(() => console.log('Connected to database...'))
  .catch((error) => {
console.log(`erro ao conectar ao banco de dados: ${error}`);
  })
}

module.exports = connectToDatabase;