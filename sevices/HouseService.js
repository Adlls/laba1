const houseRepository = require('../repositories/HouseRepository');

module.exports = class HouseService {

    constructor() {
        this._house = new houseRepository();
    }

    getRqByParams() {
        let body = {};
        for (let arg in arguments) {
            body.arg = arg;
        }
        return body;
    }

   async getHouseById(id) {
        return await this._house.findById({"_id":id}).then(value => value).catch((e) => {
            console.log("error with message: " + e);
        });
    }

    async getHouses() {
      return await this._house.findAll().then(value => value);
    }

    async createHouse(body) {
        return await this._house.create(body).then(value => value).catch((e) => {
           console.log("error with message: " + e);
        });
    }

   async updateHouse(id, body) {
        return await this._house.update(id, body).then(value => value).catch((e) => {
            console.log("error with message: " + e);
        });
    }
}
