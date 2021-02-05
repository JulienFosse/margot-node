const Realisations = require('../database/models/realisations')


module.exports = {

    getRealisation: async(req, res) => {

        const dataRealisations = await Realisations.find({}).lean();

        console.log(dataRealisations);

        res.render('pageAdmin', {
            dataRealisations
        })
    }


}