const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    shortUrl : {
        type : String,
        required : true,
        unique : true,
    },
    redirectUrl : {
        type : String,
        required : true,
    },
    visitHistory : [{timestamp : {Number} }],
    
},{timestamps : true});

const User = new mongoose.model('User',userSchema);

module.exports = User;