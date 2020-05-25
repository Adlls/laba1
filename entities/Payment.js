const mongoose = require('mongoose');
const schema = mongoose.Schema;
const nameDoc = 'payment';

module.exports = mongoose.model(nameDoc, new schema({
        value: Number,
        current_data: Date,
        id_charge: schema.Types.ObjectID
    },
    {   collection : nameDoc,
        versionKey: false
    }));

