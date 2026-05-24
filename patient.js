const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({

    name: String,

    age: Number,

    disease: String,

    tokenNumber: Number

});

module.exports = mongoose.model('Patient', patientSchema);