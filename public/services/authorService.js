((app)=>{
    'use strict'
    app.service('authorService', function($http) {
        return {

            get() {
                return $http.get('/api/authors') //promise

            },
            getPopulate(authors) {
                return $http.get('/api/authors/' + authors.authorId)
            },
            add: function(author) {
                return $http.post('/api/authors', author) // (url, objet)
            },
            edit(author) {
                return $http.put('/api/authors/' + author._id, author) // (url+id, objet)

            },
            delete(author) {
                return $http.delete('/api/authors/' + author._id)

            }
        }
    })


})(angular.module('app.services'))
