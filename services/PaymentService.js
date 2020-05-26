const paymentRepository = require('../repositories/PaymentRepository');
const chargeRepository = require('../repositories/ChargeRepository');
const saldoRepository = require('../repositories/SaldoRepository');
module.exports = class PaymentService {

    constructor() {
        this._payment = new paymentRepository();
        this._charge = new chargeRepository();
        this._saldo = new saldoRepository();
    }


     getPayments() {
        return this._payment.findAll();
    }

    async createPayment(chargeId, body) {
        let charge = await this._charge.findByIdAndPayIsFalse(chargeId);
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let currentMonth = charge.month.getMonth();
        let currentYear = charge.year.getFullYear();
        let previousMonth = currentMonth.setMonth(currentMonth - 1);
        let previousYear = currentMonth === 0 ? currentYear.setFullYear(currentYear - 1) : currentYear;

        try {
            if (year !== currentYear || month !== currentMonth)
                throw "incorrect date";
            if (body.value !== null && body.value <= body.value)
                throw "incorrect value";
        } 
        catch (e) {}

        let saldo = await this._saldo.findByIdChargeAndDate(chargeId, previousMonth, previousYear);

        let valueWithSaldo = saldo == null ? charge.value : charge.value + saldo.value;

        let payments = this._payment.findAllByIdCharge(chargeId);
        let totalPayments = 0;
        for (let payment in payments) totalPayments += payment.value;

        if (body.value + totalPayments >= valueWithSaldo)
            this._charge.update(chargeId, {is_pay: true});

        return await this._payment.create({
                value: body.value,
                year: currentYear,
                month: currentMonth,
                id_charge: charge._id
            });
    }
};
