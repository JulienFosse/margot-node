const message = require('../database/models/messages')

module.exports = {



    post: function(req, res) {
        message.create(req.body, function(err, post) {
            res.redirect('/')
        })
    }




}