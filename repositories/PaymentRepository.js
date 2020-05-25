const entityPayment = require('../entities/Payment');
const baseRepository = require('./BaseRepository');
module.exports = class HouseRepository extends baseRepository {

    constructor() {
        super(entityPayment);
    }

};
