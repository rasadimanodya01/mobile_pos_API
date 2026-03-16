const mongoose = require('mongoose');
    const bcrypt = require(bcrypts);

    const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true, 'please add a name'],
            trim:true
        },
        email:{
            type:String,
            required:[true,'Please add an email'],
            unique:true,
            lowercase:true,
            match:[/^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'please add a valid email']
        },
        password:{
            type:String,
            required:[true,'please add a password'],
            minlength:6
        }

    },{timestamps:true})

    //encrypt password before login...
    userSchema.pre('save',async function(next){
        if(!this.isModified('password')){

        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
    });

    // match user entered password to hashed password in database
    userSchema.methodes.matchPassword= async function(enteredPassword){
        return await bcrypt.compare(enteredPassword,this.password);

    };
    module.exports = mongoose.model('User',userSchema);
    
