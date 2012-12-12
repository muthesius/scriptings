// ==================
// = Backbone Start =
// ==================

var Student = Backbone.Model.extend({
  defaults: {
    name : "",
    matrikelnummer : 0,
    studiensemester: 0,
    studienabschluss : "",
    studiengang : "",
    hochschule : "Muthesius Kunsthochschule",
  },
  
  initialize: function(){
    // events könne auch im Model selbst eingebunden werden:
    this.on("change:studiensemester",this.semesterWechsel,this);
  },
  
  semesterWechsel: function(){
    console.log("Das Studiensemester hat gewechselt! "
                +this.attributes.name+" ist jetzt im "+this.attributes.studiensemester+". Semester.");
  }
});


var StudentView = Backbone.View.extend({
  el: "#student",
  
  initialize: function(){
    this.model = new Student(window.semester.student);
    
    // Wir wollen die View nue rendern, wenn sich die Daten ändern...
    this.model.on("change",this.render, this); // this muss mit! Für den Kontext.
    
    this.template = _.template($('#student-view').html());
    
    this.render();
  },
  
  render: function() {
    var viewHtml = this.template(this.model.attributes);
    this.$el.html( viewHtml );
  }
});


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
  }
  
});

$(function(){
  var app = new SemesterApp();
});
