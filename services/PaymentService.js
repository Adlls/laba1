const paymentRepository = require('../repositories/PaymentRepository');
const chargeRepository = require('../repositories/ChargeRepository');
module.exports = class PaymentService {

    constructor() {
        this._payment = new paymentRepository();
        this._charge = new chargeRepository();
    }


     getPayments() {
        return this._payment.findAll();
    }

    async createPayment(chargeId, body) {
        let charge = await this._charge.findByIdAndPayIsFalse(chargeId);
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();

        try {
            if (year !== charge.current_data.getFullYear() || month !== charge.current_data.getMonth())
                throw "incorrect date";
        } 
        catch (e) {}
        
    }



};
