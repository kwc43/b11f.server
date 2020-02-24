var express = require('express');
var router = express.Router()
var blockchainRouter = require('./blockchainService')

router.use(function(req, res, next) {
    console.log("Called: ", req.path)
    next()
})

router.use(blockchainRouter)

module.exports = router