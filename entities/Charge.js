const mongoose = require('mongoose');
const schema = mongoose.Schema;
const nameDoc = 'charge';

module.exports = mongoose.model(nameDoc, new schema({
        id_house: schema.Types.ObjectID,
        is_pay: Boolean,
        value: Number,
        saldo: Number,
        month: Number,
        year: Number
    },
    {   collection : nameDoc,
        versionKey: false
    }));
