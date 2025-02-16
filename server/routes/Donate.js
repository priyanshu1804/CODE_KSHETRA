const express=require('express');
const route=express.Router();
const Food=require('./../models/donate');
const {jwtAuthMiddleware}=require('../jwt')
route.post('/',jwtAuthMiddleware,async(req,res)=>{
    const {Item_names,Item_quantity,Item_pics,donor_name,donor_email,donor_phone}=req.body;
    if(!Item_names || !Item_quantity || !Item_pics || !donor_name || !donor_email || !donor_phone){
        return res.status(400).json({error:"Please fill all the fields"});
    }
    const food=req.user._id;
    const newFoodData=new food({
        Item_names,
        Item_quantity,
        Item_pics,
        donor_name,
        donor_email,
        donor_phone,
        user: req.user._id
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
            return res.status(404).json({error:"Food donation not found" });
        }
        await food.deleteOne();
        return res.status(200).json({message:"Food donation deleted successfully"});
    }catch (error){
        return res.status(500).json({error:"Server error"});
    }
});
route.get('/',jwtAuthMiddleware,async(req,res)=>{
    try{
        if(req.user.userType!=='NGO'){
            return res.status(403).json({error:"Access denied. Only NGOs can view this data."});
        }
        const data=await Food.find({
            userType:{$in:['Restaurant','Individual']}
        });
        const filterData=data.filter(food=>food.donor_email!==req.user.email);
        return res.status(200).json({data:filterData});
    }catch (error){
        return res.status(500).json({error:"Server error" });
    }
});
module.exports=route;