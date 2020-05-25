const express = require('express');
const router = express.Router();
const houseService = require('../services/HouseService');
const instanceHS = new houseService();

   router.get('/', async (req, res) => {
       res.send(await instanceHS.getHouses().then(value => value));
   });

   router.get('/:id', async (req, res) => {
      res.send(await instanceHS.getHouseById(req.params.id).then(value => value))
   });

   router.post('/', async (req, res) => {
     res.send(await instanceHS.createHouse(
         houseService.setRqBody(
             req.body.contract_id,
             req.body.house_num)));
   });

  router.put('/:id', async (req, res) => {
   res.send(await instanceHS.updateHouse(
       req.params.id,
       houseService.setRqBody(
       req.body.contract_id,
       req.body.house_num)));
  });


module.exports = router;
