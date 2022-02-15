const mongoose = require('mongoose');
const productSchema = mongoose.Schema({

    catId: {
        type: Number,
        required: true
    },
    subId: {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 100
    },
    price: {
        type: Number,
        required: true
    },
    mrp: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: true
    },
    position: {
        type: Number,
        default: 1
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Product', productSchema);