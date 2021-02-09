const Users = require('../database/models/users');

module.exports = {

    post: async(req, res) => {

        const user = await Users.find()

        console.log(req.body);
        console.log(user);

        Users.create(req.body, function(err, post) {

            res.redirect('/')
        })

    }
}