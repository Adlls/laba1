const houseRepository = require('../repositories/HouseRepository');

module.exports = class HouseService {

    constructor() {
        this._house = new houseRepository();
    }

    static setRqBody(contract_id, house_num) {
       return {
            "contract_id": contract_id,
            "house_num": house_num
        }
    }

    getHouseById(id) {
        return this._house.findById({"_id":id}).catch((e) => {
            console.log("error with message: " + e);
        });
    }

     getHouses() {
      return this._house.findAll();
    }

     createHouse(body) {
        return  this._house.create(body).catch((e) => {
           console.log("error with message: " + e);
        });
    }

    updateHouse(id, body) {
        return this._house.update(id, body).catch((e) => {
            console.log("error with message: " + e);
        });
    }
}
