// Import
const express = require('express'),
    router = express.Router(),
    path = require('path')

module.exports = {
    get: async(req, res) => {
        res.render('article')
    }
}