const mongoose = require('mongoose');

const RealisationsSchema = new mongoose.Schema({


    title: String,
    content: String,
    price: String,
    time: String,
    image: String,

})

const Realisations = mongoose.model('Realisations', RealisationsSchema)

module.exports = Realisations