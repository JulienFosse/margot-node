const realisations = require('../database/models/realisations')



module.exports = {
    deleteOneRealisation: (req, res) => {

        realisations.deleteOne({


            _id: req.params.id

        }, (err) => {

            if (!err) return res.redirect('/admin')

            else res.send(err)
        })
    }
}