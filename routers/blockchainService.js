var express = require('express');
var app = express();
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:8080'
const api = apiAdapter(BASE_URL)

router.get('/invoke', (req, res) => {
    //res.status(200).send({message: "API call on /invoke endpoint with " + req.originalUrl});
    api.get(req.originalUrl).then(resp => {
     res.send(resp.data);
   }).catch((error)=>{
     console.log(error);
     if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
   })
})

module.exports = router
