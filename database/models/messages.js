const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({


    name: String,
    firstName: String,
    email: String,
    object: String,
    content: String,

})

const Messages = mongoose.model('Messages', MessagesSchema)

module.exports = Messages