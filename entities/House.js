const mongoose = require('mongoose');
const schema = mongoose.Schema;

module.exports = new schema({
    contract_id: schema.Types.ObjectID,
    house_num: Number
},
    {   collection : 'house',
        versionKey: false
    });
