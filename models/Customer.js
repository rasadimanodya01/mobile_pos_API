const mongoose = require('mongoose');
    
    const CustomerSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true, 'please add a name'],
            trim:true
        },
        Address:{
            type:String,
            required:[true,'Please add an address'],
            
            
        },
        salary:{
            type:Number,
            required:[true,'please add a salary'],
            min:0
        }

    },{timestamps:true});

    
    module.exports = mongoose.model('Customer',CustomerSchema);
    
