const mongoose = require('mongoose');

const RealisationsSchema = new mongoose.Schema({


    titleReal: String,
    contentReal: String,
    priceReal: String,
    timeReal: String,
    imageReal: String,

})

const realisation = mongoose.model('realisations', RealisationsSchema)

module.exports = realisation