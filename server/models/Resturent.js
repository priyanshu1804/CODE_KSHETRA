const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const Resturent=new mongoose.Schema({
    Organization_Name:{
        type:String,
        required:true,
    },
    Organization_Type:{
        type:String,
        required:true,
    },
    Organization_Address:{
        type:String,
        required:true,
    },
    Organization_Contact:{
        type:Number,
        required:true,
    },
    Organization_Email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    Organization_Website:{
        type:String,
    },
    GST_Number:{
        type:Number,
        required:true,
    }
});
const ResturentModel=mongoose.model('Resturent',Resturent);
module.exports=ResturentModel;