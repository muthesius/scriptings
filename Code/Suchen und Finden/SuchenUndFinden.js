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




// 3. Wie viele Credits hast Du in diesem Semester?
var gesamt_credits;



// 4. ... und wie hoch ist Dein Workload?
var gesamt_workload;



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



