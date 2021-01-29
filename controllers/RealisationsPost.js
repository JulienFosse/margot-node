const Realisations = require("../database/models/realisations");
const path = require('path');


module.exports = function(req, res) {

    const image = req.files.image
    const uploadFiles = path.resolve(__dirname, "..", "/public/images_realisations/", image.name);

    console.log(image);
    // console.log(req.files);
    // console.log(req.body);

    image.mv(uploadFiles, function(err) {
        Realisations.create( // Et ça nous ajoute dans la base de donnée, grâce au bodyParser.
            {
                title: req.body.title,
                content: req.body.content,
                objet: req.body.objet,
                image: `/images_realisations/${image.title}`
            },

            (error, post) => {
                console.log("Objet créé-----------------------------------------------");
                res.redirect('/')
            })
    })

}