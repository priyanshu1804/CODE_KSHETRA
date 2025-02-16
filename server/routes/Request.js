const express=require('express');
const route=express.Router();
const Food=require('./../models/Request');
const {jwtAuthMiddleware}=require('../jwt')
route.post('/',jwtAuthMiddleware,async(req,res)=>{
    const {Item_names,Item_quantity,requester_name,requester_email,requester_phone}=req.body;
    if(!Item_names || !Item_quantity || !requester_name || !requester_email || !requester_phone){
        return res.status(400).json({error:"Please fill all the fields"});
    }
    const food=req.user._id;
    const newFoodData=new food({
        Item_names,
        Item_quantity,
        requester_name,
        requester_email,
        requester_phone,
        user:req.user._id
    });
    const newFood=await Song.create(newFoodData);
    return res.status(200).json(newFood);
});
route.delete('/',jwtAuthMiddleware,async(req,res)=>{
    const{Item_names}=req.body;
    if(!Item_names){
        return res.status(400).json({error:"Item name is required" });
    }
    try{
        const food=await Food.findOne({Item_names,user:req.user._id });
        if(!food){
            return res.status(404).json({error:"Food request not found" });
        }
        await food.deleteOne();
        return res.status(200).json({message:"Food request deleted successfully"});
    }catch (error){
        return res.status(500).json({error:"Server error"});
    }
});
route.get('/',jwtAuthMiddleware,async(req,res)=>{
    try{
        if(req.user.userType!=='Restaurant'&&req.user.userType!=='Individual'){
            return res.status(403).json({error:"Access denied. Only restaurants and individuals can view this data."});
        }
        const ngoRequests=await Food.find({userType:'NGO'});
        return res.status(200).json({data:ngoRequests });
    }catch(error){
        return res.status(500).json({ error: "Server error" });
    }
});
module.exports = route;