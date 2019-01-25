'use strict'

//  export const getInfoRouteOne = async (req, res, next) {
//     debug('It is working now!')
//     res.send({ data: 'Test data' })
//  }

const debug = require('debug')('express-basics:routes')

const getInfoRouteOne = (req, res, next) => {
    debug('It is working now!!')
    res.send({ data: 'Test data'})
}

module.exports = {
    getInfoRouteOne
}