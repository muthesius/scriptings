// ==================
// = Backbone Start =
// ==================

var SemesterApp = Backbone.View.extend({
  el: 'body'
});

var app = new SemesterApp();

// Zum Test das el in die Console loggen:
console.log(app.el);
