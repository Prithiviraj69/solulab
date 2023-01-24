const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const router = require('./components/index.js')

require('dotenv/config'); // For Authenticaion

app.use(bodyparser.json());
app.use('/api', router);



mongoose.connect("mongodb://localhost:27017/solulab", { useNewUrlParser: true }, () => console.log('Connected to DB'));
app.listen(3000);