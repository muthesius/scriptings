// ==================
// = Backbone Start =
// ==================

var SemesterApp = Backbone.View.extend({
  el: 'body'
});

$(function(){
  var app = new SemesterApp();

  // Zum Test das el in die Console loggen:
  console.log(app.el);
});