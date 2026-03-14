const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

//load env variables
dotenv.config();

//connect to database
connectDB();

const app = express();

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extened:true}));

//enable cors
app.use(cors());

//routes
app.use('/api/v1/auth', require('./routes/authRoutes'));

//root route
app.get('/',(req, res)=>{

    res.json({
        message:'Express MongoDb MVC API',
        version:'1.0.0'

    })
});

app.use((error,req,next)=>{
    console.error(error.stack);
    res.status(500).json({
        success:false,
        message:'Server Error',
        error:error.message
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('server running port ${PORT}')
    
})