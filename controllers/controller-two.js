'stric'

class ControllerTwo {
    getRouteTwoInfo(req, res, next) {
        const { params } = req.params

        if (params !== '5') { 
          return next(new Error('Something not found'))
        }
      
        res.send({ params })
    }
}

module.exports = new ControllerTwo()