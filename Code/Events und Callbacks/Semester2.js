// ==========================================
// = Ge-Pimpte Version des Semester-Objects =
// ==========================================

// Aufgabe: Die *script.js* Datei ist der Sandkasten zum ausprobieren.
//          Schaue dort nach und erweitere die Datei, indem Du Dich mit dem 
//          Einsatz des *new* vertraut machst.
//          Erstelle mehrere Studierende und verschiedene Semester mit diesen.
//
//          Schaue ebenfalls in die Fuznktionen dieses Scriptes und vervoll-
//          ständige die aufgaben.
//
//          1) Wie im Seminar kennengelernt, setze die Eigenschaften aus
//          den Parametern der Funktion in die *this*-Eigenschaften ein.

// Der/die Studierende
window.Student = function(name,studiensemester) {
  this.name = name; // Schritt 1 von Aufgabe 1, vervollständige alle Funktionen
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

