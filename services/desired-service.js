'use strict'

var rp = require('request-promise');

class DesiredService {
    methodOne() {
        return new Promise((resolve, reject) => {
            resolve('Promise resolution')
        })
    }

    methodTwo(){
        var options = {
            uri: 'http://demo1785708.mockable.io/test',
            json: true
        }

        return rp(options)
    }


    
}

module.exports = new DesiredService()