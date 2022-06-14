require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ExpressRedisCache = require('express-redis-cache');
const { findStudent } = require('./controllers/student');

const cache = ExpressRedisCache({
  expire: 60, // expired after 1 minute
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.get('/read/:npm/:trxId', cache.route(), findStudent);

app.get('/read/:npm', findStudent);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Student Reader app listening on port ${port}`);
});
