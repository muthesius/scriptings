
var AppRouter = Backbone.Router.extend({
  routes: {
    "" : "home",
    "me":"showStudentDetails",
    "vvz":"vvz"
  },
  
  home: function(){
    Backbone.history.navigate("vvz");
  },
  
  vvz: function(){
    // new VVZView({el:$('#container')}); 
  },
  
  showStudentDetails: function(){
    // new StudentDetailView({el:$('#container')});
  }
  
})