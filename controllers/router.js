const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');


const pageAdminController = require('./pageAdminController');
const formContactController = require('./formContactController');





// Page Admin

// liste clients

router.route('/admin')
    .get(pageAdminController.get)


router.route('/admin/createClient')
    .post(pageAdminController.post)

router.route('/admin/createDevis')
    .post(pageAdminController.postDevis)

router.route('/admin/createReal')
    .post(pageAdminController.postRealisation)




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


module.exports = router;