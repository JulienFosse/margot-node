const Client = require("../database/models/clients");

module.exports = function(req, res) {

    console.log(req.body);

    Client.create(req.body, function(error, post) {
        res.redirect('/pageAdmin')
    })



}