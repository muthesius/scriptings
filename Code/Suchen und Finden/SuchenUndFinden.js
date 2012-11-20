/*
   Suchen und Finden
   -----------------
   Arbeiten mit Objekten, eine Reihe an Aufgaben zum Training
   von Schleifen und Bedingungen.
 */

// 0. "Lade" Dein "Semester" so, dass Du es überall über den
//    Namen _semester_ erreichen kannst.

// console.log(semester); // Teste, ob alles gut ging.



// 1. Drucke jede Veranstaltung einzeln(!) in die Console.

for (var i=0; i < semester.veranstaltungen.length; i++) {
  console.log(semester.veranstaltungen[i]);
}


// 2. ... in einem _formatierten_ Text.

for (var i=0; i < semester.veranstaltungen.length; i++) {
  var v = semester.veranstaltungen[i]
  // "Scriptings", 3 Credits, 2 Semesterwochenstunden mit 90 Stunden Workload im Semester.
  console.log('"'+v.titel+'", '+v.credits+" Credits, "+v.sws+", Semesterwochenstunden mit "+v.workload+"  Workload im Semester.");
}


// 3. Wie viele Credits hast Du in diesem Semester?
var gesamt_credits = 0;
for (var i=0; i < semester.veranstaltungen.length; i++) {
  gesamt_credits += semester.veranstaltungen[i].credits;
}
console.log("Gesamte Credits in diesem Semester: "+gesamt_credits);


// 4. ... und wie hoch ist Dein Workload?
var gesamt_workload = 0;
for (var i=0; i < semester.veranstaltungen.length; i++) {
  gesamt_workload += semester.veranstaltungen[i].workload;
}
console.log("Alle Seminare nehmen in diesem Semester "+gesamt_workload+" Stunden in Anspruch.");



// 5. Finde die Veranstaltung mit den meisten Credits.
var joker;



// 6. Erstelle ein Array mit allen Titeln der Veranstaltungen
//    Benutze dafür die Push-Funktion eines Arrays.
var veranstaltungstitel = [];
var v = semester.veranstaltungen;

for (var i=0; i<v.length; i++) {
  var eineVeranstaltung = v[i];
  veranstaltungstitel.push(eineVeranstaltung.titel);
}

console.log(veranstaltungstitel);



// 7. Generiere den Satz:
//    "<mein_name> hat in diesem Semester <Seminar1>,<Seminar1>
//     ... und <letztes_Seminar> belegt."
var satz;

satz = semester.student.name+ " hat in diesem Semester ";

var letzteVeranstaltung = veranstaltungstitel.pop();

/*
for (var i=0; i<veranstaltungstitel.length; i++) {
  // Tip: if....
  satz += veranstaltungstitel[i];
  if(i<veranstaltungstitel.length-1) {
    satz+=", "   
  }
}
*/

satz += veranstaltungstitel.join(", ")+ " und "+letzteVeranstaltung+" belegt.";

console.log(satz);




// 8. Lade Deine Kommilitonen dazu und erstelle ein Array
//    mit allen, in diesem Semester belegten Veranstaltungen.
//    Achte darauf, dass keine doppelt darin vorkommen!



