// PAGE ADMIN

// Liste des clients

const client = require('../database/models/clients');
const devis = require('../database/models/devis');
const message = require('../database/models/messages');
const realisation = require('../database/models/realisations');
const path = require('path');








module.exports = {


    // récupérer et afficher les données d'une collection
    get: function(req, res) {
        client.find().lean()
            .exec((err, clientschema) => {
                devis.find().lean()
                    .exec((err, devisschema) => {
                        message.find().lean()
                            .exec((err, messageschema) => {
                                realisation.find().lean()
                                    .exec((err, realisationschema) => {
                                        res.render('pageAdmin', {
                                            client: clientschema,
                                            devis: devisschema,
                                            message: messageschema,
                                            realisation: realisationschema,


                                        })

                                        console.log(realisationschema);


                                    })


                            })
                    })
            })
    },

    // Créer un nouvel article   

    post: function(req, res) {

        client.create(req.body, function(err, post) {

            res.redirect('/admin')
        })
    },

    postDevis: function(req, res) {

        devis.create(req.body, function(err, post) {


        })
    },
    postRealisation: function(req, res) {

        const { imageReal } = req.files

        console.log(req.files);

        const uploadFiles = path.resolve("public/images_realisations/" + Date.now() + '-' + imageReal.name);

        console.log(Date.now() + "-" + req.files.imageReal);

        console.log(imageReal);

        imageReal.mv(uploadFiles, (err) => {
            realisation.create({
                ...req.body,
                imageReal: '/images_realisations/' + Date.now() + '-' + imageReal.name
            }, function(err, post) {
                if (err) {
                    console.log(err);
                }

                res.redirect('/admin')
            })
        })



    },




    //  Editer, Modifier un élément selon son ID 

    put: function(req, res) {
        client.update(
            // condition
            {
                _id: req.params.id
            },
            // upadte
            {
                gender: req.body.gender,
                name: req.body.name,
                firstName: req.body.firstName,
                email: req.body.email,
                adress: req.body.adress,
                phone: req.body.phone,
                status: req.body.status,
                statutEntreprise: req.body.statutEntreprise,
                raisonSociale: req.body.raisonSociale,
                siret: req.body.siret,
            },

            // plusieurs modifications en même temps
            {
                multi: true
            },

            // execution

            function(err) {
                if (!err) {
                    console.log("client modifié !");
                    res.redirect('/admin')


                } else {
                    console.log(err);
                }
            }
        )
    },

    putDevis: function(req, res) {
        devis.update(
            // condition
            {
                _id: req.params.id
            },
            // upadte
            {
                entitled: req.body.entitled,
                object: req.body.object,
                content: req.body.content,


            },

            // plusieurs modifications en même temps
            {
                multi: true
            },

            // execution

            function(err) {
                if (!err) {
                    console.log("devis modifié !");
                    res.redirect('/admin')


                } else {
                    console.log(err);
                }
            }
        )
    },
    putRealisation: function(req, res) {
        realisation.update(
            // condition
            {
                _id: req.params.id
            },
            // upadte
            {
                titleReal: req.body.titleReal,
                contentReal: req.body.contentReal,
                priceReal: req.body.priceReal,
                timeReal: req.body.timeReal,
                imageReal: req.body.imageReal,


            },

            // plusieurs modifications en même temps
            {
                multi: true
            },

            // execution

            function(err) {
                if (!err) {
                    console.log("realisation modifié !");
                    res.redirect('/admin')


                } else {
                    console.log(err);
                }
            }
        )
    },
    // Récupérer et afficher les données d'un élément selon son ID
    // get: function(req, res) {
    //     client.findOne({
    //             _id: req.params.id
    //         },
    //         function(err, clientschema) {
    //             if (!err) {
    //                 res.render('clientid', {
    //                     _id: clientschema.id,
    //                     gender: clientschema.gender,
    //                     name: clientschema.name,
    //                     firstName: clientschema.firstName,
    //                     email: clientschema.email,
    //                     adress: clientschema.adress,
    //                     phone: clientschema.phone,
    //                     status: clientschema.status,
    //                     statutEntreprise: clientschema.statutEntreprise,
    //                     raisonSociale: clientschema.raisonSociale,
    //                     siret: clientschema.siret,

    //                 }).
    //             } else {
    //                 console.log(err);
    //             }
    //         }).lean()
    // },


    delete: function(req, res) {
        client.deleteOne({
                _id: req.params.id
            },

            function(err) {
                if (!err) {
                    console.log('client supprimé');
                    res.redirect('/admin')
                } else {
                    console.log(err);
                }
            }
        ).lean()
    },
    deleteDevis: function(req, res) {
        devis.deleteOne({
                _id: req.params.id
            },

            function(err) {
                if (!err) {
                    console.log('devis supprimé');
                    res.redirect('/admin')
                } else {
                    console.log(err);
                }
            }
        ).lean()
    },
    deleteMessage: function(req, res) {
        message.deleteOne({
                _id: req.params.id
            },

            function(err) {
                if (!err) {
                    console.log('message supprimé');
                    res.redirect('/admin')
                } else {
                    console.log(err);
                }
            }
        ).lean()
    },
    deleteRealisation: function(req, res) {
        realisation.deleteOne({
                _id: req.params.id
            },

            function(err) {
                if (!err) {
                    console.log('realisation supprimé');
                    res.redirect('/admin')
                } else {
                    console.log(err);
                }
            }
        ).lean()
    },
}