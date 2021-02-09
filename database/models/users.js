const mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

const UsersSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        // unique: true,
    },

    password: {
        type: String,
        required: true,

    },


})

UsersSchema.pre('save', function(next) {
    const user = this

    bcrypt.hash(user.password, 10, function(err, encrypted) {

        user.password = encrypted
        next()
    })
})



module.exports = mongoose.model('Users', UsersSchema)