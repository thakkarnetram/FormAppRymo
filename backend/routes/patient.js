const router = require('express').Router();
let Patient = require('../models/patient.model');

router.route('/').get((req, res) => {
  Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {
  console.log(req.body);
  const patientname = req.body.patientname;
  const age = Number(req.body.age);

  const newPatient = new Patient({
    patientname,
    age,
  });

  newPatient
    .save()
    .then(() => res.json('Patient added!'))
    .catch(err => res.status(400).json('Error adding Patient:' + err));
});

module.exports = router;
