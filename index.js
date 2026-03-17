require('events').defaultMaxListeners = 20; // ✅ Prevent MaxListeners warning

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Routes
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/customers', require('./routes/CustomerRoutes'));
app.use('/api/v1/orders', require('./routes/OrderRoutes'));
app.use('/api/v1/products', require('./routes/ProductRoutes'));

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Express MongoDB MVC API',
        version: '1.0.0'
    });
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Server Error',
        error: err.message
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});