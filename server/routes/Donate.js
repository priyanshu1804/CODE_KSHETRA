const express = require("express");
const router = express.Router();
const Food = require("../models/donate");
const passport = require("passport");
const multer = require("multer");

// Configure Multer for image uploads (stores in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST route - Create a donation with image upload
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("Item_pics"), // Handle single image upload
  async (req, res) => {
    try {
      // Fetch user details
      const user = req.user;

      // Restrict NGOs from donating
      if (user.role === "NGO") {
        console.log("NGO tried to donate");
        return res.status(403).json({ error: "Access denied. NGOs cannot donate." });
      }

      // Extract donation details
      const { Item_names, Item_quantity, donor_name, donor_email, donor_phone } = req.body;

      if (!Item_names || !Item_quantity || !donor_name || !donor_email || !donor_phone || !req.file) {
        return res.status(400).json({ error: "Please fill all required fields, including an image" });
      }

      // Create new donation
      const newFood = await Food.create({
        Item_names,
        Item_quantity,
        Item_pics: {
          data: req.file.buffer, // Store image as binary data
          contentType: req.file.mimetype, // Store image type (e.g., image/png)
        },
        donor_name,
        donor_email,
        donor_phone,
      });

      return res.status(201).json({ message: "Donation created successfully!", donation: newFood });

    } catch (error) {
      console.error("Error creating donation:", error);
      return res.status(500).json({ error: "Server error" });
    }
  }
);

// GET route - Fetch all donations
router.get("/", async (req, res) => {
  try {
    const donations = await Food.find({});

    if (!donations.length) {
      return res.status(404).json({ message: "No donations found" });
    }

    // Convert image buffer to Base64 for frontend rendering
    const formattedDonations = donations.map(donation => ({
      ...donation._doc,
      Item_pics: donation.Item_pics && donation.Item_pics.data
        ? `data:${donation.Item_pics.contentType};base64,${donation.Item_pics.data.toString("base64")}`
        : null
    }));

    res.status(200).json(formattedDonations);
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
