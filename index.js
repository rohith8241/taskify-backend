const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const knexfile = require('./src/services/knexfile');

const app = express();

app.use(cors({
    origin: true,
    credentials: true,
  }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '50mb' }));

process.env.NODE_ENV="development";

dotenv.config({ path: 'env/'+process.env.NODE_ENV+'.env' });

app.listen(3000, () => {
    console.log('app listening on port 3000');
})

knexfile();

app.use(require('./src/routes'));

module.exports = app