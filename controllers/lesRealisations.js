const realisation = require('../database/models/realisations')


module.exports = {
    get: function(req, res) {
        realisation.find().lean()
            .exec((err, realisationschema) => {
                res.render('lesRealisations', {

                    realisation: realisationschema,


                })

                console.log(realisationschema);


            })

    }
}