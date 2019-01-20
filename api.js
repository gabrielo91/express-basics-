'use strict'

const debug = require('debug')('express-basics:routes')

const express = require('express')
const api = express.Router()

api.get('/route_one', (req, res) => {
  debug('It is working now!')
  res.send('Here we go!')
})

api.get('/route_two/:params', (req, res) => {
  const { params } = req.params
  res.send({ params })
})

api.get('/route_three/:params1/:params2', (req, res) => {
  const { params1, params2 } = req.params
  res.send({ params1, params2 })
})

module.exports = api
