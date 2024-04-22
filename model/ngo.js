const mongoose = require('mongoose');

const ngoRegisterSchema = new mongoose.Schema({

  username: String,
    password: String,
    NGOName: String,
    Mobile: Number,
    NgoID:String,
    NgoLocation:String,
})

const NGO = mongoose.model('NGO',ngoRegisterSchema);

module.exports = NGO;