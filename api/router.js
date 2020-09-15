// Import
const express = require('express'),
    router = express.Router(),
    path = require('path')

// Controller
const homeController = require('./controllers/homeController'),
    aboutController = require('./controllers/aboutController'),
    lesRealisationsController = require('./controllers/lesRealisationsController'),
    devisController = require('./controllers/devisController'),
    contactPageController = require('./controllers/contactPageController');

// Home
router.route('/')
    .get(homeController.get)

// About
router.route('/about')
    .get(aboutController.get)

// Les Realisations
router.route('/lesRealisations')
    .get(lesRealisationsController.get)

// Devis
router.route('/devis')
    .get(devisController.get)

// ContactPage
router.route('/contactPage')
    .get(contactPageController.get)






module.exports = router;