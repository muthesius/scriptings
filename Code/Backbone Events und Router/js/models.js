
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