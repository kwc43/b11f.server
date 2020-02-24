var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:8000'
const api = apiAdapter(BASE_URL)

router.get('/invoke', (req, res) => {
  res.status(200).send({message: "API call on /invoke endpoint"});
  //api.get(req.path).then(resp => {
  //  res.send(resp.data)
  //})
})

module.exports = router