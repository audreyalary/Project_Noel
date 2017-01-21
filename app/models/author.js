'use strict'
let mongoose = require('mongoose')


// Create du schéma User Attention NOMMER AU SINGULIER :> c'est la structure d'un document
let authorModel = mongoose.model('Author', new mongoose.Schema({
    name: {
        type: String

    },
    surname: {
        type: String

    },
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }],
}, {
    timestamps: true
}))

module.exports = authorModel
