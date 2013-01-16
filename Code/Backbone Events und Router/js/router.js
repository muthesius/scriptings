
var AppRouter = Backbone.Router.extend({
  routes: {
    "" : "home",
    "all":"showAll",
    "selected":"selectedOnly"
  },
  
  home: function(){
    
  },
  
  showAll: function(){
    $('.veranstaltung').show();
  },
  
  selectedOnly: function(){
    $('.veranstaltung').not('.selected').hide();
  }
  
})