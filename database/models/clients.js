const mongoose = require('mongoose');

const ClientsSchema = new mongoose.Schema({


    gender: String,
    name: String,
    firstName: String,
    email: String,
    adress: String,
    phone: String,
    status: String,
    statutEntreprise: String,
    raisonSociale: String,
    siret: String



})

const client = mongoose.model('Clients', ClientsSchema)

module.exports = client