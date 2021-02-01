const mongoose = require('mongoose');

const DevisSchema = new mongoose.Schema({


    entitled: String,
    object: String,
    content: String,
    name: String,
    Firstname: String,
    email: String

})

const Devis = mongoose.model('Devis', DevisSchema)

module.exports = Devis