// ==================
// = Backbone Start =
// ==================

var SemesterApp = Backbone.View.extend({
  el: 'body',
  
  name  : "Semesterplan",
  about : "Das Semester im Überblick",
  
  initialize: function(){
    console.log("Eine neue SemesterApp! Das bin ich:", this);
    
    // Damit das Layout nicht im Code geschiet, verwenden wir Templates
    this.template = _.template($('#app-view').html());
    
    // Damit die View auch zu Beginn "zu sehen" ist rufen wir render auf:
    this.render();
  },
  
  // Den Content rendern:
  render: function() {
    // Das Template wird ebenfalls "gerendert" und einem Daten-Objekt versorgt
    // Das Daten-Objekt ist hier die View selbst: this
    var viewHtml = this.template(this);
    
    // heraus kommt HTML, das wir in unser Element einfügen können:
    this.$el.html( viewHtml );
  }
  
});

$(function(){
  var app = new SemesterApp();
});
