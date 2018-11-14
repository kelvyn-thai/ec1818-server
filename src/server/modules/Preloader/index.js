const mongoose = require('mongoose');
const CONSTANT = require('../../constant');

function initConnectMongoDB() {
    mongoose.connect(CONSTANT.DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
    }, (err) => {
        if (err) throw new Error('Can not connect to database');
        console.log('Connected mongoose')
    });        
}

module.exports = {
    initApp: function() {
        initConnectMongoDB();
    }
}