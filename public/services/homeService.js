((app)=>{
    'use strict'
    app.service('homeService', function($http) {
        return {

            get() {
                return $http.get('/api/articles') //promise

            },
            getPopulate(article) {
               return $http.get('/api/articles/' + project.articleId)
           },
            add: function(article) {
                return $http.post('/api/articles', article) // (url, objet)
            },
            edit(article) {
                return $http.put('/api/articles/' + article._id, article) // (url+id, objet)

            },
            delete(article) {
                return $http.delete('/api/articles/' + article._id)

            }
        }
    })


})(angular.module('app.services'))
