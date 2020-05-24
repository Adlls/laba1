const express = require('express');
const router = express.Router();
const houseService = require('../sevices/HouseService');
const instanceHS = new houseService();

   router.get('/', async (req, res) => {
       console.log(instanceHS.getRqByParams("h", "s"));
       res.send(await instanceHS.getHouses().then(value => value));
   });

   router.get('/:id', async (req, res) => {
      res.send(await instanceHS.getHouseById(req.params.id).then(value => value))
   });

   router.post('/', async (req, res) => {
     res.send(await instanceHS.createHouse({
      "contract_id": req.body.contract_id,
      "house_num": req.body.house_num
     }));
   });

  router.put('/:id', async (req, res) => {
   res.send(await instanceHS.updateHouse(req.params.id,{
    "contract_id": req.body.contract_id,
    "house_num": req.body.house_num
   }));
  });


module.exports = router;
