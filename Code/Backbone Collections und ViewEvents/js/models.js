
var Student = Backbone.Model.extend({
  defaults: {
    name : "",
    matrikelnummer : 0,
    studiensemester: 0,
    studienabschluss : "",
    studiengang : "",
    hochschule : "Muthesius Kunsthochschule",
    anzahl: 0
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


window.student = new Student(semester.student);

var Veranstaltung = Backbone.Model.extend({
  defaults: {
    titel: "Veranstaltung",
    sws: 0,
    credits: 0,
    workload: 0,
    zeit: "",
    tag: ""
  }
});



var Vorlesungsverzeichnis = Backbone.Collection.extend({
  model: Veranstaltung
});


var Semesterplan = Backbone.Collection.extend({
  model: Veranstaltung,
  student: window.student,
  
  initialize:function(){
    this.on("add remove reset", this.added, this);
  },
  
  added: function(veranstaltung){
    console.log("neue veranstaltung!",this.length)
    this.student.set("anzahl",this.length);
  }
});

window.student.semesterplan = new Semesterplan();












