const mongoose = require('mongoose');

const RealisationsSchema = new mongoose.Schema({

    title: String,
    content: String,
    image: String,

    dateDeCreation: {
        type: Date,
        default: new Date()
    },


})

const Realisations = mongoose.model('Realisations', RealisationsSchema)

module.exports = Realisations