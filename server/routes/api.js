
const express = require('express');
const router = express.Router();
 const mongoose = require('mongoose');
const User = require('../models/user')
const jwt = require('jsonwebtoken');
 const database = module.exports = () =>{

    const connectionparams = {
        useNewUrlParser:true,
        useUnifiledTopology:true
    }
 }

 const db = "mongodb+srv://venkatuser:10ah1a1204@meandemo.hbj7ttu.mongodb.net/?retryWrites=true&w=majority";

 mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 }
 )

 const connection = mongoose.connection;

 connection.once("open",()=>{
    console.log("DB connection Done ")
 })

 //database();

router.get('/',(req,res)=>{
    res.send("this from API page")
});

router.get('/123',(req,res)=>{
    res.send("this from API page... 123")
});


router.post('/register',(req,res)=>{

    console.log("in register page")
    let userdata = req.body;
     let user = new User(userdata);

     user.save((error,registerUser)=>{
        if(error){
            console.log(error)
        }else{
            let payload = { subject: registerUser._id };
            let token =  jwt.sign(payload,'secretkey')
            res.status(200).send({token})
        }
     })

})


router.post('/login',(req,res)=>{
 
    let userData = req.body;

    User.findOne({email:userData.email},(err,user)=>{
   if(err){
    console.log(err)
   }else{
       if(!user){
        res.status(401).send("Invalid Email");
       }else if(user.password != userData.password){
        res.status(401).send("Invalid password");
       }else{
        let payload = {subject : user._id};
        let token = jwt.sign(payload,'secretkey')
        res.status(201).send({token})
       }
   }
    })
});


function tokenVerify(req,res,next){

    if(!req.headers.authorization){
   return res.status(401).send("Unauthorized requst")
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token === 'null'){
      return   res.status(401).send("Unauthorized requst");
    }
    payload = jwt.verify(token,'secretkey');

    if(!payload){
        return   res.status(401).send("Unauthorized requst");
    }
    req.userid = payload.subject
    next()
};

router.get('/events',(req,res)=>{
  let event = [
    {
        "Id": 1002,
        "Name": "Ram",
        "Year": 2019,
        "City": "Mumbai",
        "Branch": "CSE",
        },
        {
            "Id": 1003,
        "Name": "venkat",
        "Year": 2014,
        "City": "Guntur",
        "Branch": "IT",
            }
  ];
    res.json(event)
});


router.get('/special-events',tokenVerify,(req,res)=>{
    let event = [
      {
          "Id": 7799,
          "Name": "Ram_special",
          "Year": 2019,
          "City": "Mumbai",
          "Branch": "CSE",
          },
          {
              "Id": 1003,
          "Name": "venkat_special",
          "Year": 2014,
          "City": "Guntur",
          "Branch": "IT",
              }
    ];
      res.json(event)
  });

module.exports = router;



