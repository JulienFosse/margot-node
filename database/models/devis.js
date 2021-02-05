const mongoose = require('mongoose');

const DevisSchema = new mongoose.Schema({


    entitled: String,
    object: String,
    content: String,
    name: String,
    Firstname: String,
    email: String

})

module.exports = mongoose.model('Devis', DevisSchema)