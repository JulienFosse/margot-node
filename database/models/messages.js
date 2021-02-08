const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({


    nameMessage: String,
    firstNameMessage: String,
    emailMessage: String,
    objectMessage: String,
    contentMessage: String,

})

module.exports = mongoose.model('Messages', MessagesSchema)