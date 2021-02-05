const Realisation = require('../database/models/realisations')

module.exports = {
    editRealisation: async function(req, res) {



        const id = {
            _id: req.params.id
        }

        Realisation.updateOne(id, {
                title: req.body.title,
                content: req.body.content,
                price: req.body.price,
                time: req.body.time,
            },

            function(err) {
                if (err) {
                    res.redirect('/pageAdmin')
                } else {

                    res.redirect('/admin/')
                }
            })


    }
}