const mongoose = require('mongoose');

async function connectMDB(url){
    return await mongoose.connect(url);
}

module.exports = connectMDB;