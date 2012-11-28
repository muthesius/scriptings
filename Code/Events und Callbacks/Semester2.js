// ==========================================
// = Ge-Pimpte Version des Semester-Objects =
// ==========================================

// Der/die Studierende
window.Student = function(name,semester) {
  this.name = "";
  this.studiensemester = 0;
  this.matrikelnummer = 0;
  this.studiengang = "";
  this.studienabschluss = "";
};

window.Veranstaltung = function(titel,sws,credits) {
  this.titel = "";
  this.sws = 0;
  this.credits = 0;
  this.workload = 0;
  this.zeit = "";
  this.tag = "";
  
  // Erweitere die Veranstaltung, so, dass der Workload "automatisch"
  // berechnet wird.
  
  // this.set = ...
  
  // Bonus-Aufgabe: Kannst du die _zeit_ ebenfalls "automatisch" berechnen?
  //                Was brauchst du dafür?
  
}

// Das Semester als Funktion(s-Objekt)
window.Semester = function(student,welches,jahr) {
  this.student = student;
  this.welches = welches;
  this.jahr = jahr;
  
  this.veranstaltungen = []; // Zu Beginn ist nichts belegt
  
}

