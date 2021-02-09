const mongoose = require('mongoose');

const DevisSchema = new mongoose.Schema({

    entitled: String,
    objectDevis: String,
    contentDevis: String,
    nameDevis: String,
    firstNameDevis: String,
    emailDevis: String

})

const devis = mongoose.model('Devis', DevisSchema)

module.exports = devis