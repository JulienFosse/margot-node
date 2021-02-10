const user = require('../database/models/users')
const bcrypt = require('bcrypt')

module.exports = {

    get: function(req, res) {

        const { email, password } = req.body;

        user.findOne({ email }, function(err, user) {

            if (user) {

                bcrypt.compare(password, user.password, function(err, same) {
                    if (same) {

                        res.redirect('/admin')

                    } else {
                        res.redirect('/user/login')
                    }
                })
            } else {

                res.redirect('user/login')

            }
        })


    }

}