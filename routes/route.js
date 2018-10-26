const express = require('express');

const router = express();

const Data = require('../models/Item');

router.get('/getF', (req, res) => {
  Data.find({})
    .then(data => {
      console.log(data);
      res.json(data)
    })
    .catch(err=>{
      console.log(err);
    })
})

module.exports = router;