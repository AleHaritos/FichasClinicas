const express = require('express')
const consign = require('consign')
const app = express()
const database = require('./config/db')
const cors = require('cors')

app.db = database

app.use(express.json())
app.use(cors())


consign()
.then('./api/validation.js')
.then('./api')
.then('./config/routes.js')
.into(app)


app.listen(3000, () => {
    console.log('Executando backend...')
})