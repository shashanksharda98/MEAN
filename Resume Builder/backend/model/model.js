const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({

    emailId:{
        type:String,
        required:true        
    },
    password:{
        type:String
    },
    phoneNo:{
        type:Number
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    education:
        {
            schoolName10: String,
            cgpa10:String,
            schoolName12:String,
            percentage12:String,
            collegeName:String,
            cgpacollege:String
        }

    
    
});

const data = module.exports = mongoose.model('data', resumeSchema);