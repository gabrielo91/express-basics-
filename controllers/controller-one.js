'use strict'

const debug = require('debug')('express-basics:routes')
const desiredService = require('../services/desired-service')

const getInfoRouteOne = (req, res, next) => {
    debug('It is working now!!')
    desiredService.methodOne().then((data) => {
        console.log(`promise result is: ${data}`)
    })
    res.send({ data: 'Test data'})
}

const getInfoRouteFromServer = async (req, res, next) => {
    const result = await desiredService.methodTwo()
    console.log(`we\'ve got a result!!!!`)
    console.log(result)
    return res.send({ status: result, state: 'todo bello' })
}

module.exports = {
    getInfoRouteOne,
    getInfoRouteFromServer
}