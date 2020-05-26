const mongoose = require('mongoose');
const schema = mongoose.Schema;
const nameDoc = 'saldo';

module.exports = mongoose.model(nameDoc, new schema({
        value: Number,
        month: Number,
        year: Number,
        id_charge: schema.Types.ObjectID
    },
    {   collection : nameDoc,
        versionKey: false
    }));
