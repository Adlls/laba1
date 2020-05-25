const mongoose = require('mongoose');
module.exports = class BaseRepository {

    constructor(schema) {
        this._schema = schema;
        this.getModel();
    }

    static getObjectIdType(id) {
        return mongoose.Types.ObjectId(id);
    }

    getModel() {
        return this._schema;
    }

     findById(id) {
        return this.getModel().findById(id).exec();
    }

    async findAll() {
        return this.getModel().find().exec();
    }

     create(body) {
        return this.getModel().create(body).exec();
    }

     update(id, body) {
        return this.getModel().findOneAndUpdate(id , body).exec();
    }

};
