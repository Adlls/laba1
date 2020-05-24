const mongoose = require('mongoose');
module.exports = class BaseRepository {

    _schema;
    constructor(schema) {
        this._schema = schema;
        this.getModel();
    }

    getModel() {
        return mongoose.model('', this._schema);
    }

    async findById(id) {
        return await this.getModel().findById(id).then(value => value);
    }

    async findAll() {
        return await this.getModel().find().then(value => value);
    }

    async create(body) {
        return await this.getModel().create(body).then(value => value);
    }

    async update(id, body) {
        return await this.getModel().findOneAndUpdate(id , body).then(value => value);
    }

}
