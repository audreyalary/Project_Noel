((app)=>{
  'use strict'
  app.component('home',{
    bindings:{
      selectedArticle : "="
    },
    templateUrl :'components/home/home.html',
    controller: ['homeService', function(homeService) {




        homeService.get().then((res) => {
            this.articles = res.data
        })

        this.display = (article, index) => {
            //FONCTION LIRE LA SUITE
            this.article = article
            this.article.index = index // mémoriser la position (index dans this.blogs) du blog que l'on selectionne
        }

        this.delete = function(article, index) {
            homeService.delete(article).then((res) => {
                this.articles.splice(index, 1);
            })
        }

        this.add = () => {
            this.article = {}
            this.article.addMode = true
        }

        this.saveNew = () => {
            if (this.article.editMode) {
                //edition
                homeService.edit(this.article).then((res) => {
                    this.article = null
                })
            } else {
                //Nouveau
                homeService.add(this.article).then((res) => {
                    this.article.addMode = false
                    this.articles.push(res.data)
                    this.article = null
                })
            }

        }

        let previous = {}

        this.edit = () => {
            previous = angular.copy(this.article) //mémorise l'ancienne ou valeur courante du blog
            this.article.editMode = true // on passe le blog en mode edition
        }

        this.cancel = () => {
            this.article = previous
            this.articles[this.article.index] = previous // on remplace également dans la liste le blog par l'ancienne version grace à sa position (index)
        }

    }]
  })

})(require('angular').module('app.home'))
