const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const HouseRepository = require('../repositories/HouseRepository');


 router.get('/:num', async function(req, res, next) {
  let hr = new HouseRepository(mongoose);
  let findByHUM = await hr.findHouseByNum(req.params['num']).then((value => { return value}));
  console.log(findByHUM);
  res.send(findByHUM);
});

module.exports = router;
