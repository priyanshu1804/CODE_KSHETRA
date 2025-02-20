const express=require('express');
const router=express.Router();
const Food=require('./../models/donate');
const bcrypt = require("bcrypt");
const {getToken} = require("../utils/helpers");
const passport = require("passport");
router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        // Fetch user details
        const user = req.user;

        // Restrict NGOs from donating
        if (user.role === "NGO") {
            console.log("NGO tried to donate");
            return res.status(403).json({ error: "Access denied. NGOs cannot donate." });
        }

        // Extract donation details
        const { Item_names, Item_quantity, Item_pics, donor_name, donor_email, donor_phone } = req.body;

        if (!Item_names || !Item_quantity || !Item_pics || !donor_name || !donor_email || !donor_phone) {
            return res.status(400).json({ error: "Please fill all required fields" });
        }

        // Create new donation
        const newFood = await Food.create({
            Item_names,
            Item_quantity,
            Item_pics,
            donor_name,
            donor_email,
            donor_phone
        });

        return res.status(201).json({ message: "Donation created successfully!", donation: newFood });

    } catch (error) {
        console.error("Error creating donation:", error);
        return res.status(500).json({ error: "Server error" });
    }
});

router.get("/", async (req, res) => {
    try {
      const donations = await Food.find({});
      console.log("Sending Donations:", donations); // ✅ Ensure data is correct
  
      if (!donations.length) {
        return res.status(404).json({ message: "No donations found" });
      }
      res.status(200).json(donations); // ✅ Explicitly send JSON array
    } catch (error) {
      console.error("Error fetching donations:", error);
      res.status(500).json({ error: "Server error" });
    }
  });
  

module.exports=router;