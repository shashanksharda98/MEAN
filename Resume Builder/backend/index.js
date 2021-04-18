var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var routes = require('./routes/routes');
var app = express();
require("dotenv/config")




app.use(cors());
app.use(bodyparser.json());
app.use('/api', routes);



app.listen(process.env.PORT, ()=>{
    console.log("Server started at port: " +process.env.PORT);
})


const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECTION, connectionParams).then( ()=>{
  console.log("connected");
}).catch( (err)=>{
  console.error(`Error connecting to database. \n${err}`);
});
//npm run nodemon

