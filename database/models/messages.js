const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({


    name: String,
    firstName: String,
    email: String,
    object: String,
    content: String,

})

module.exports = mongoose.model('Messages', MessagesSchema)