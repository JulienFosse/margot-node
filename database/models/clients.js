const mongoose = require('mongoose');

const ClientsSchema = new mongoose.Schema({


    gender: String,
    name: String,
    firstname: String,
    email: String,
    adress: String,
    phone: String,
    status: String,
    statutEntreprise: String,
    raisonSociale: String,
    siret: String,



})

const Clients = mongoose.model('Clients', ClientsSchema)

module.exports = Clients