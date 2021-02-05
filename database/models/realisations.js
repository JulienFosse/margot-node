const mongoose = require('mongoose');

const RealisationsSchema = new mongoose.Schema({


    title: String,
    content: String,
    price: String,
    time: String,
    image: String,

})

module.exports = mongoose.model('realisations', RealisationsSchema)