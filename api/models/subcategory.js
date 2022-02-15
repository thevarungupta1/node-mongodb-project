const mongoose = require('mongoose');
const slugify = require('slugify');

const subCategorySchema = mongoose.Schema({
    catId: {
        type: Number,
        required: true
    },
    subId: {
        required: true,
        type: Number
    },
    subName: {
        type: String,
        unique: [true, 'Duplicate sub-category name'],
        required: [true, 'Please add sub-category name'],
        trim: true,
        maxlength: [50, 'Name cannot be more then 50 characters']
    },
    subImage: {
        type: String,
        default: ''
    },
    subDescription: {
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
    }
});


subCategorySchema.pre('save', function(next) {
    this.slug = slugify(this.subName, { lower: true });
    next();
})

module.exports = mongoose.model('SubCategory', subCategorySchema);