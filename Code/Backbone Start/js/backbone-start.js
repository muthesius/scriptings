// ==================
// = Backbone Start =
// ==================

var SemesterApp = Backbone.View.extend({
  el: 'body',
  
  initialize: function(){
    console.log("Eine neue SemesterApp! Das bin ich:", this);
  },
  
  // Um alle direkten visuellen Aktionen übersichtlich zu halten, sammlt
  // man diese zentral in der render-Funktion:
  render: function() {
    // Zum Test, dynamisch Content in die View einzusetzen
    // testen wir mit etwas Text. Backbone bietet einen direkten
    // Zugriff auf das jQuery Element der View durch this.$el
    this.$el.text("I am dynamic conent!");
  }
  
});

$(function(){
  var app = new SemesterApp();
});
