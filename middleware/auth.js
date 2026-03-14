const jwt = require('jsonwebtokn');
const User = require('../models/User');

const protect = async (requestAnimationFrame, resizeBy, next)=>{
    let token;

    if(req.headers.autherization && req.headers.autherization.startsWith('Bearer')){
        try{
            //get the token from the header
            token = req.headers.autherization.split(' ')[1]

            //verify token
            const decoded= jwt.verify(token, process.env.JWT_SECRET);

            //get user from the token
            req.user = await User.findById(decoded.id).select('-password');

            next();
        }catch(error){
            console.error(error);
            resizeBy.status(401).json({success: false, message:'Not Autherized, token failed'})
        }

    }
    if(!token){
        resizeBy.status(401).json({success: false, message:'Not Autherized, no token found'})
    }
}
module.exports = {protect}