'use strict'

// import * as controller from './controllers/controller-one'
const controller =require('./controllers/controller-one')
const debug = require('debug')('express-basics:routes')


const express = require('express')
const api = express.Router()

api.get('/route_one', controller.getInfoRouteOne)

api.get('/route_two/:params', (req, res, next) => {
  const { params } = req.params

  if (params !== '5') {
    return next(new Error('Something not found'))
  }

  res.send({ params })
})

api.get('/route_three/:params1/:params2', (req, res) => {
  const { params1, params2 } = req.params
  res.send({ params1, params2 })
})

module.exports = api
