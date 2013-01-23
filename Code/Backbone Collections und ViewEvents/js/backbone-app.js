// ==================
// = Backbone Start =
// ==================


var SemesterApp = Backbone.View.extend({
  el: 'body',
  
  name  : "Semesterplan",
  about : "Das Semester im Überblick",
  
  semester : window.semester,
  
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
    
    // Erstelle eine View für den Studierenden (wird automatisch hinzugeladen)
    var studentView = new StudentView();
    
    // Rendere die Veranstaltungen hinein
    for(var i=0; i < this.semester.veranstaltungen.length; i++){
      var v = this.semester.veranstaltungen[i];
      var vm = new Veranstaltung(v);
      var vv = new VeranstaltungsView({ model:vm, id: "veranstaltung-"+i });
      this.$el.find("#veranstaltungen").append(vv.$el);
    }
  }
  
});

$(function(){
  var app = new SemesterApp();
  var router = new AppRouter();
  Backbone.history.start({});
  
});
