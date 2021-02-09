const express = require('express');
const router = express.Router();



const pageAdminController = require('./pageAdminController');
const formContactController = require('./formContactController');
const userCreateController = require('./userCreateController');
const homeController = require('./homePage');

const aboutController = require('./about'),
    lesRealisationsController = require('./lesRealisations'),
    devisController = require('./devis'),
    contactPageController = require('./contact'),
    pageAdmin = require('./pageAdmin'),
    userCreatePageController = require('./userCreatePage'),
    userLoginController = require('./userLogin');






// Page Admin

// Ajouter un élément 

router.route('/admin/createClient')
    .post(pageAdminController.post)

router.route('/admin/createDevis')
    .post(pageAdminController.postDevis)

router.route('/admin/createReal')
    .post(pageAdminController.postRealisation)

router.route('/user/create')
    .post(userCreateController.post)



//  Récupérer les données pour les affichées

router.route('/admin')
    .get(pageAdminController.get)




// Modifier ou Supprimer un élément 

router.route('/:id')
    .put(pageAdminController.put)
    .delete(pageAdminController.delete)

router.route('/:id/devis')
    .put(pageAdminController.putDevis)
    .delete(pageAdminController.deleteDevis)

router.route('/:id/message')
    .delete(pageAdminController.deleteMessage)


router.route('/message/post')
    .post(formContactController.post)

router.route('/:id/realisation')
    .put(pageAdminController.putRealisation)
    .delete(pageAdminController.deleteRealisation)




// Routes de mes pages 

router.route('/')
    .get(homeController.get)

router.route('/about')
    .get(aboutController.get)

router.route('/lesRealisations')
    .get(lesRealisationsController.get)

router.route('/devis')
    .get(devisController.get)

router.route('/contact')
    .get(contactPageController.get)

router.route('/pageAdmin')
    .get(pageAdmin.get)

router.route('/user/create')
    .get(userCreatePageController.get)

router.route('/user/login')
    .get(userLoginController.get)



module.exports = router;