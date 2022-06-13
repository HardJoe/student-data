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

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/read', async (req, res) => {
  const student = await Student.findOne({ npm: '1111111111' });
  // const person = new Student({
  //   name: 'test',
  //   npm: '1111111111',
  // });

  // await person.save();
  res.json(student);
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Student Reader app listening on port ${port}`);
});
