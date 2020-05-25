const entityHouse = require('../entities/House');
const baseRepository = require('./BaseRepository');
module.exports = class HouseRepository extends baseRepository {

    constructor() {
        super(entityHouse);
    }

    /*
    async findHouseByNumber(num_house) {
        return await this.getModel().find({"num_house": num_house})
            .then((value) => value)
            .catch(() => {
                console.log(`House with number ${num_house} is not find`);
        });
    }

     */
};
