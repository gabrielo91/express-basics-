'use strict'

const http = require('http')
const express = require('express')
const chalk = require('chalk')
const api = require('./api')

const PORT = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)

app.use('/api', api)

server.listen(PORT, () => {
  console.log(`${chalk.green(['basics-express'])} is running on port ${PORT}`)
})
