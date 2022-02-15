const express = require('express');
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() +'-' +file.originalname)
    }
});

var uploads = multer({storage: storage})

/**
 * "fieldname": "blogimage",
    "originalname": "21290724.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "uploads/",
    "filename": "1569353011978-21290724.jpg",
    "path": "uploads\\1569353011978-21290724.jpg",
    "size": 14252
 */

router.post('/:id', uploads.single('image'),  (req, res, next) => {    
    const file = req.file;    
    if(!file){
        return res.status(500).json({
            error: true,
            message: 'please upload a file'
        })
    }
    res.status(201).json({
        error: false,
        message: 'file uploaded successfully',
        filename: file.filename
    })
});


module.exports = router;