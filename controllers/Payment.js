const express = require('express');
const router = express.Router();
const paymentService = require('../services/PaymentService');
const instancePS = new paymentService();

router.get('/', async (req, res) => {
    res.send(await instancePS.getPayments().then((value) => value));
});

router.get('/:id', async (req, res) => {
});

router.post('/', async (req, res) => {
    res.send(await instancePS.createPayment("5ecc4405d48bc08bc7f3f74a", {}));
});

router.put('/:id', async (req, res) => {

});

module.exports = router;
