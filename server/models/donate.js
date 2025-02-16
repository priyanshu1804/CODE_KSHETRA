const mongoose=require('mongoose');
const Donate=new mongoose.Schema({
    Item_names:{
        type:String,
        required:true,
    },
    Item_quantity:{
        type:Number,
        required:true,
    },
    Item_pics:{
        type:String,
        required:true,
    },
    donor_name:{
        type:String,
        required:true
    },
    donor_email:{
        type:String,
        required:true
    },
    donor_phone:{
        type:String,
        required:true
    }
});
const DonateModel=mongoose.model('Donate',Donate);
module.exports=DonateModel;