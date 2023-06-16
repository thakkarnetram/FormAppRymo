const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  patientname: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
