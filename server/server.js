const express = require('express');
const bodyParser = require('body-parser');
 const port = 3000;
const cors = require('cors')
const api = require('./routes/api');
 const app = express();

 app.use(cors());
 app.use(bodyParser.json());
 app.use('/',api)

 app.get('/',(req,res)=>{
  res.send("Hello Vnekat this from Server")
 });




 app.listen(port,(res,err)=>{
    console.log("the server ruinning on server"+port);

    if(err){
        console.log("error in Server ",err)
    }
 })