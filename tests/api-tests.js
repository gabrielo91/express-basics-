'use strict'

const tests = require('ava')
const request = require('supertest')
const sinon = require('sinon')
const proxyquire = require('proxyquire')

let sandbox = null
let server = null
let desiredServiceStub = null
let ObjectTypeOneStub = {}

tests.beforeEach(async () => {
  sandbox = sinon.createSandbox()
  desiredServiceStub = sandbox.stub()
  desiredServiceStub.returns(Promise.resolve(
    { data: 'Test data' }
  ))

  ObjectTypeOneStub.methodOne = sandbox.stub()
  ObjectTypeOneStub.methodOne.returns(Promise.resolve({ data: 'Test data' }))

  const api = proxyquire('../api', {
    'desired-service': desiredServiceStub
  })

  server = proxyquire('../server',  {
    './api': api
  })
})



console.log('Starting')
tests.serial.cb('/api/route_one', t => {
  request(server)
    .get('/api/route_one')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.falsy(err, 'should not return')
      let body = JSON.stringify(res.body)
      let expected = JSON.stringify({ data: 'Test data' })
      t.deepEqual(body, expected, 'response body should be the expected')
      t.end()
    })
})
