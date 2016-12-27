((app)=>{
  'use strict'
  app.component('home',{
    bindings:{
      selectedArticle : "="
    },
    templateUrl :'components/home/home.html',
  controller: function (){
    this.articles=[{
      title:"Val louron",
      content:"differents pistes sont ouvertes sur le domaine"
    },{
      title:"Enfin les vacances",
      content:"a l'occasion des vacances de noël, la station vous offre l'opportunité de gagner une paire de ski"
    },{
      title:"N'oubliez pas vos après ski",
      content: "Temps pourri, la station tiens à vous informer que la route est glissante!"

  }]
  }
})
})(angular.module('app.home'))
