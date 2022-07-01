const express = require('express'); /* importando o express */
const cors = require('cors');
const connectToDatabase = require('./src/database/database');

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json()); /* ativando o express */

connectToDatabase()

app.listen(port, () => {
   console.log(`Server listening on port http://localhost:${port}`);
});
