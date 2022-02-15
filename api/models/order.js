const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressSchema = mongoose.Schema({
    _id: String,
    pincode: Number,
    houseNo: String,
    streetName: String,
    city: String,
    country: String,
    type: String
});

const userSchema = mongoose.Schema({
    userId: String,
    name: String,
    email: String,
    mobile: String
});

const productSchema = mongoose.Schema({
    pid: String,
    productName: String,
    image: String,
    price: Number,
    mrp: Number,
    unit: String,
    description: String,
    quantity: Number
});

const paymentSchema = mongoose.Schema({
    paymentMode: String,
    paymentId: String,
    paymentStatus: String,
    paymentDate: {
        type: Date,
    }
})


const orderSummarySchema = mongoose.Schema({
    totalAmount: Number,
    ourPrice: Number,
    discount: Number,
    deliveryCharges: Number,
    couponType: String,
    couponCode: String,
    couponDiscount: Number,
    orderAmount: Number
})

const orderSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderStatus: String,
    orderSummary: orderSummarySchema,
    user: userSchema,
    shippingAddress: addressSchema,
    payment: paymentSchema,
    products: [productSchema],
});

module.exports = mongoose.model('Order', orderSchema);