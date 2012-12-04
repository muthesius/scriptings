// ==================
// = Backbone Start =
// ==================

var SemesterApp = Backbone.View.extend({
  el: 'body',
  
  initialize: function(){
    console.log("Eine neue SemesterApp! Das bin ich:", this);
  }
  
});

$(function(){
  var app = new SemesterApp();
});
