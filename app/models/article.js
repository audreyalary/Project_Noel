'use strict'
let mongoose = require('mongoose')


// Create du schéma User Attention NOMMER AU SINGULIER :> c'est la structure d'un document
let articleModel = mongoose.model('Article', new mongoose.Schema({
    title: {
        type: String

    },

    content: {
        type: String

    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
}, {
    timestamps: true
}))

module.exports = articleModel
