const entityCharge = require('../entities/Charge');
const baseRepository = require('./BaseRepository');
module.exports = class ChargeRepository extends baseRepository {

    constructor() {
        super(entityCharge);
    }

    async findByIdAndPayIsFalse(id) {
        return await this.getModel().findOne({_id: baseRepository.getObjectIdType(id), is_pay: false }).exec().catch(() => {
                console.log(`Not find payment with id ${id}`);
            });
    }
};
