const entityHouse = require('../entities/House');
const baseRepository = require('./BaseRepository');
module.exports = class HouseRepository extends baseRepository {

    constructor() {
        super(entityHouse);
    }
};
