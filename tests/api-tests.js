'use strict'

const tests = require('ava')
const request = require('supertest')
const server = require('../server')

console.log('Starting')
tests.serial.cb('/api/route_one', t => {
    request(server)
        .get('/api/route_one')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            t.falsy(err, 'should not return')
            let body = res.body 
            t.deepEqual(body, { data: 'Test data'}, 'response body should be the expected')
            t.end()
        })
})