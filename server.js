'use strict'

const http = require('http')
const express = require('express')
const chalk = require('chalk')
const api = require('./api')
const debug = require('debug')('express-basics:routes')

const PORT = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)

app.use('/api', api)

// Express error handler

app.use((err, req, res, next) => {
  debug(`Error ${err}`)

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: err.message })
})

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

if (!module.parent) {
  // If no one is requiring this, launch it
  process.on('uncaughtException', handleFatalError)
  process.on('unhandledRejection', handleFatalError)

  server.listen(PORT, () => {
    console.log(`${chalk.green(['basics-express'])} is running on port ${PORT}`)
  })
}

module.exports = server
