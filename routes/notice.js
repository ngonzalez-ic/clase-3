var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {})

router.put('/:id', function (req, res, next) {
  console.log(req.params.id, req.body)

  res.json(req.body)
})

router.post('/', function (req, res, next) {
  console.log(req.body)

  res.json(req.body)
})

router.delete('/:id', function (req, res) {
  console.log(req.params.id)

  res.json({})
})
module.exports = router
