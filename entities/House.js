const mongoose = require('mongoose');
const schema = mongoose.Schema;
const nameDoc = 'house';

module.exports = mongoose.model(nameDoc, new schema({
        contract_id: schema.Types.ObjectID,
        house_num: Number
    },
    {   collection : nameDoc,
        versionKey: false
    }));
