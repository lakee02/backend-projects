const mongoose = require('mongoose');
require('dotenv').config();

const connectionString=process.env.MONGO_URI;

mongoose
.connect(connectionString)
.then(()=>{console.log('Connected To DB..')})
.catch((err)=>{console.log(err)})
     