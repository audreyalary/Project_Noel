'use strict'

let AuthorsController = require('../controllers/AuthorsController')
module.exports = (app) => {

    let ctrl = new AuthorsController()
        // Création des différentes "routes" (API) que le serveur met à disposition
    app.get('/authors', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/authors/:id', (req, res, next) => { //query parameter
        // Récupération d'un user en fonction de l'id passé en paramètre
        return ctrl.findById(req, res, next)
    })

    app.post('/authors', (req, res, next) => {

        // Création d'un User depuis les données contenu dans le corps de la requete (request body)
        return ctrl.create(req, res, next)

    })

    app.put('/authors/:id', (req, res, next) => {
        // Mise à jour du User d'id passé en paramètre depuis les données contenu dans le corps de la requete (request body)
        return ctrl.update(req, res, next)
    })

    app.delete('/authors/:id', (req, res, next) => {
        // Suppression du User d'id passé en paramètre
        return ctrl.delete(req, res, next)
    })



}
