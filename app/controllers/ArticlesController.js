'use strict'
let Controller = require('./Controller')

const AUTHOR = require('../models/author')
const ARTICLE = require('../models/article')
class ArticlesController extends Controller {

    constructor() {
        super(ARTICLE)
    }

    find(req, res, next) {
        this.model.find(req.query).populate('author').exec((err, documents) => { //query string
            res.json(documents)
        })

    }

    findById(req, res, next) {
        this.model.findById(req.params.id).populate('author').exec((err, document) => {
            if (err) next(err)
            else res.json(document)
        })
    }
}


module.exports = ArticlesController
