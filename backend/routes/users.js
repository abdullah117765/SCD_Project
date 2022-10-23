import express from 'express';
// import SaveUser, {DeleteUser,GetUser,SearchUser} from '../Model/Registerdb.js';

// const express = require('express');
const router = express.Router();

// const mongoose = require('mongoose');
import mongoose from 'mongoose';

 mongoose.connect("mongodb://localhost:27017/Users", {useNewUrlParser :true});
    
    
    
    const UserSchema = new  mongoose.Schema({
        Name: String,
        // rating : {
        //     type: Number,
        //     min: [0, 'Too few eggs'],   // these are validation of mongoose
        //     max: 10
        //   },
        Email: String,
        Birthday: Date, 
        Number: String,
        Password: String,
      });



router.get('/', (req, res) => {
    res.send(' Please add correct path')
})

router.post('/profile',function(req,res){
  
    const User =mongoose.model("User", UserSchema);  // User collection
    
    User.find({ Email:"axiomshah@gmail.com"},function(err,use){
    
         // this use here is an array that is returned from db
         if(err){
            console.log(err);
            res.send({"value": "error"})
        }else{
           
            if(use.length>0){
                //console.log(use.email);
               res.send(use)
            }else{
                res.send({"value": "-1"})
            }
        
        }
        
     
        });

    });

router.post('/signin',authorizeUserspresence,function(req,res){
    // var email = req.body.email;
    // var password = req.body.password;
    // console.log("Email = "+email+", password is "+password);
    res.send({"value": "1"});
    });

    router.post('/signup',function(req,res){
        var name1 = req.body.name;
        var email = req.body.email;
        var Birthday = req.body.birthday;
        var phonenumber = req.body.Phonenumber;
        var password = req.body.password;
        console.log("Email = "+email+", password is "+password, "birthday"+ Birthday, "Phonenumber"+phonenumber,"Name"+name);
        res.send({"value": "1"});
        SaveUser(name1,email,Birthday,phonenumber,password);
        });


        function authorizeUserspresence(req, res, next) {

            const User =mongoose.model("User", UserSchema);  // User collection
   
            const qq=User.find({ Email:req.body.email , Password: req.body.password},function(err,use){
            
                 // this use here is an array that is returned from db
                 if(err){
                    console.log(err);
                    res.send({"value": "error"})
                }else{
                  // console.log(use);
                    if(use.length>0){
                        next()
                    }else{
                        res.send({"value": "-1"})
                    }
                
               // console.log(use);
                // use.forEach(function(us){
                //     console.log(us.Email);
                // });
                }
                
             
                });

          }



        




          function SaveUser(name1,email1,Birthday1,Phonenumber1, password1){

    
            const User =mongoose.model("User", UserSchema);  // User collection
            
            const row1 = new User({   
                Name: name1,
                Email : email1,
                Birthday: Birthday1,
                Number: Phonenumber1,
                Password:password1
            });
            
            row1.save();  //for saving a single value
        
        };
















export default router;

// module.exports = router;