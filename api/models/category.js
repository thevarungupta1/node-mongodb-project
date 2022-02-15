const mongoose = require('mongoose');
const slugify = require('slugify');

const categorySchema = mongoose.Schema({
    catId: {
        required: true,
        type: Number
    },
    catName: {
        type: String,
        unique: [true, 'Duplicate category name'],
        required: [true, 'Please add category name'],
        trim: true,
        maxlength: [50, 'Name cannot be more then 50 characters']
    },
    catImage: {
        type: String,
        default: '',
    },
    catDescription: {
        type: String,
        default: '',
    },
    slug: String,
    position: {
        type: Number,
        default: 1
    },
    status: {
        type: Boolean,
        default: true
    }
});

categorySchema.pre('save', function(next) {
    this.slug = slugify(this.catName, { lower: true });
    next();
})

module.exports = mongoose.model('category', categorySchema);