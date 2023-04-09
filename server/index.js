require('dotenv').config()

const express = require('express')

const dbConnect = require('./db')
const app = express()
const PORT = process.env.PORT || 8888

dbConnect()

app.get('/', (req, res) => res.send('Hello'))

app.listen(PORT, () => console.log(`Server đang chạy tại địa chỉ http://localhost:${PORT}`))