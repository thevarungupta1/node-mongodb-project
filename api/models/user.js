const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    userId: String,
    address1: String,
    address2: String,
    city: String,
    country: String,
    pincode: Number
});

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter first name']
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: String,
        required: [true, 'mobile is required']
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    profileImage: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    resetPassword: String,
    address: [addressSchema]
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});


module.exports = mongoose.model('User', userSchema);