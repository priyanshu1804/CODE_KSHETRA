const mongoose=require('mongoose');
const User=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    Contact:{
        type:Number,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    AadharNumber:{
        type:Number,
        required:true,
    },
    role:{
        type:String,
        type:String,
        enum:['Resturent','NGO','Individual'],
        required:true
    }
});

const UserModel=mongoose.model('User',User);
module.exports=UserModel;