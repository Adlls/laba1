const entitySaldo = require('../entities/Saldo');
const baseRepository = require('./BaseRepository');
module.exports = class SaldoRepository extends baseRepository {

    constructor() {
        super(entitySaldo);
    }

    async findByIdChargeAndDate(chargeId, month, year) {
            return await this.getModel().findOne({id_charge: chargeId, month: month, year: year})
                .exec().catch((e) => {
                console.log(`{saldo not found}`);
            })
    }

};
