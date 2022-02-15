const { config } = require('./config/settings');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
// Load env vars
dotenv.config({ path: './config/config.env' });

const mongoose = require('mongoose');
mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true }, () => {
    console.log('Connected to database')
});

const express = require('express');
const app = express();

//app.use(logger);

const expressOasGenerator = require('express-oas-generator');
expressOasGenerator.init(app, {}); // to overwrite generated specification's values use second argument.

const authRoutes = require('./api/routes/auth');
const userRoutes = require('./api/routes/user');
const categoryRoutes = require('./api/routes/category');
const subCategoryRoutes = require('./api/routes/subcategory');
const productRoutes = require('./api/routes/products');
const uploadRoutes = require('./api/routes/upload');
const addressRoutes = require('./api/routes/address');
const orderRoutes = require('./api/routes/orders');

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/subcategory', subCategoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/uploads', uploadRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/orders', orderRoutes);

// app.use((req, res, next)=>{
//     const error = new Error('Not Found');
//     error.status = 404;
//     next(error);
// });

// app.use((error, req, res, next)=>{
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     })
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})