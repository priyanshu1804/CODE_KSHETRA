const mongoose = require('mongoose');

const DonateSchema = new mongoose.Schema({
    Item_names: {
        type: String,
        required: true,
    },
    Item_quantity: {
        type: Number,
        required: true,
    },
    Item_pics: {
        data: Buffer,  // Store image as binary data
        contentType: String,  // Store the image type (e.g., 'image/png', 'image/jpeg')
    },
    donor_name: {
        type: String,
        required: true
    },
    donor_email: {
        type: String,
        required: true
    },
    donor_phone: {
        type: String,
        required: true
    }
});

const DonateModel = mongoose.model('Donate', DonateSchema);
module.exports = DonateModel;
