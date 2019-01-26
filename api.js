'use strict'

const controllerTwo = require('./controllers/controller-two')
const controller = require('./controllers/controller-one')
const debug = require('debug')('express-basics:routes')


const express = require('express')
const api = express.Router()

api.get('/route_one', controller.getInfoRouteOne)

api.get('/route_two/:params', controllerTwo.getRouteTwoInfo)

api.get('/route_three', controller.getInfoRouteFromServer)

api.get('/route_three/:params1/:params2', (req, res) => {
  const { params1, params2 } = req.params
  res.send({ params1, params2 })
})

module.exports = api
