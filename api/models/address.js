const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: String,
    phone: String,
    address1: String,
    address2: String,
    houseNo: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    selected: Boolean,
    location: String,
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: 'India'
    },
    pincode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Address', addressSchema);