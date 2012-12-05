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
//          Start: Wie im Seminar kennengelernt, setze die Eigenschaften aus
//          den Parametern der Funktion in die *this*-Eigenschaften ein.

// Der/die Studierende
window.Student = function(name,studiensemester,matrikelnummer,studiengang,abschluss) {
  this.name = name; // Schritt 1 von Aufgabe 1, vervollständige alle Funktionen
  this.studiensemester = studiensemester;
  this.matrikelnummer = matrikelnummer;
  this.studiengang = studiengang;
  this.studienabschluss = abschluss;
};

window.Veranstaltung = function(titel,sws,credits,zeit,tag) {
  this.titel = titel;
  this.sws = sws;
  this.credits = credits;
  this.workload = this.credits*30;
  this.zeit = zeit;
  this.tag = tag;
  
  // Ein Callback "Hook", wenn sich das Semester geändert hat.
  this.onchange = function(veranstaltung,changed_property){
    switch (changed_property) {
        case "credits":
          console.log(arguments);
          this.workload = this.credits*30;
        break;
    }
  };
  
  // Erweitere die Veranstaltung, so, dass der Workload "automatisch"
  // berechnet wird.
  
  this.set = function(eigenschaft,wert){
    this[eigenschaft] = wert;
    this.onchange(this,eigenschaft);
  }
  
  // Bonus-Aufgabe: Kannst du die _zeit_ ebenfalls "automatisch" berechnen?
  //                Was brauchst du dafür?
  
}

// Das Semester als Funktion(s-Objekt)
window.Semester = function(student,welches,jahr) {
  this.student = student;
  this.welches = welches;
  this.jahr = jahr;
  
  this.veranstaltungen = []; // Zu Beginn ist nichts belegt
  
  // Diese Varablen dienen als "interne" Zähler, vergiss nicht, sie an
  // entsprechender Stelle zu aktualisieren!
  this.credits  = 0;
  this.workload = 0;
  
  // Eine verbreitete Art "private" Eigenschaften zu definieren nutzt den _
  this._zielcredits = 30;
  
  // Ein Semester sollte auch noch mehr "können".
  // Vervollständige den Code, so weit Du es schaffst.
  // Welche Methoden fallen Dir noch ein? Schreibe sie dazu.
  this.updateCredits = function(){
    var gesamt = 0;
		this.veranstaltungen.map(function(v){
				gesamt += v.credits;
		});
		this.credits = gesamt;
  };
  
  this.addVeranstaltung = function(neue_veranstaltung) {
    // Fügt den this.veranstaltungen eine neue hinzu.
    this.veranstaltungen.push(neue_veranstaltung);
		this.updateCredits();
  };
  
  this.removeVeranstaltung = function(titel) {
    // Achtung! BONUS! lösche anhand des Titels eine Veranstaltung aus dem Array.
  };
  
  this.getVeranstaltungstitel = function() {
    // Gebe mit return ein Array mit allen Veranstaltungstiteln zurück
    return this.veranstaltungen.map(function(v){
        return v.titel;
    });
  };

  this.getGesamtCredits = function() {
    // Liefert die Gesamtanzahl der Credits in diesem (this) Semester
		this.updateCredits();
		return this.credits;
  };

  this.getGesamtWorkload = function() {
    // Liefert den gesamten Workload in diesem (this) Semester
  };
  
  this.creditsCompleted = function() {
    // Gibt true oder false zurück, ob die Credit-Anzahl erreicht wurde.
		return this.credits >= this._zielcredits;
  };

  // *toString* ist ein standardisierter Name für eine Funktion.
  // Sie wird aufgerufen, wenn das Objekt als String benötigt wird.
  this.toString = function(){
    return "Die Beschreibung eines Semesters."
  }
}

