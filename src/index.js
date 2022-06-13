require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Student = require('./models/student');

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.get('/npm/:npm', async (req, res) => {
  const npm = req.params.npm;
  try {
    const student = await Student.findOne({ npm });
    res.json({
      status: 'OK',
      npm,
      nama: student.name,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: 'student not found',
    });
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Student Reader app listening on port ${port}`);
});
