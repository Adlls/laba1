const entityHouse = require('../entities/House');
module.exports = class HouseRepository {

    constructor(mongoose) {
        this._user = mongoose.model('house', entityHouse);
    }

   async findHouseByNum(numHouse) {
    return await this._user.find({'house_num': numHouse}).then((value) => {
            return value;
     });
    }
};
