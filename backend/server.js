const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log(`MongoDB database connection established successfully`);
});

const patientRouter = require('./routes/patient');
app.use('/patients', patientRouter);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});
