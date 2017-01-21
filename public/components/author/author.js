((app)=>{
  'use strict'
  app.component('author',{
    bindings:{
      selectedAuthor : "="
    },
    templateUrl :'components/author/author.html',
    controller: ['authorService', function(authorService) {




        authorService.get().then((res) => {
            this.authors = res.data
        })

        this.display = (author, index) => {
            //FONCTION LIRE LA SUITE
            this.author = author
            this.author.index = index // mémoriser la position (index dans this.blogs) du blog que l'on selectionne
        }

        this.delete = function(author, index) {
            authorService.delete(author).then((res) => {
                this.authors.splice(index, 1);
            })
        }

        this.add = () => {
            this.author = {}
            this.author.addMode = true
        }

        this.saveNew = () => {
            if (this.author.editMode) {
                //edition
                authorService.edit(this.author).then((res) => {
                    this.author = null
                })
            } else {
                //Nouveau
                authorService.add(this.author).then((res) => {
                    this.author.addMode = false
                    this.authors.push(res.data)
                    this.author = null
                })
            }

        }

        let previous = {}

        this.edit = () => {
            previous = angular.copy(this.author) //mémorise l'ancienne ou valeur courante du blog
            this.author.editMode = true // on passe le blog en mode edition
        }

        this.cancel = () => {
            this.author = previous
            this.authors[this.author.index] = previous // on remplace également dans la liste le blog par l'ancienne version grace à sa position (index)
        }

    }]
  })

})(require('angular').module('app.author'))
