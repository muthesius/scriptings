// =======================================================
// = Callback/Handler Situationen am Beispiel mit Arrays =
// =======================================================

// Achte auf Dein Einrücken! Eine gute Struktur hilft dem Lesen und Verstehen!


// 1) .map(function(){...}) als Alternative zu for...

// Als einfaches Bespiel logge alle Veranstaltungen _einzeln_ in die Console

semester.veranstaltungen.map( function(veranstaltung) {
  console.log(veranstaltung);
});


// 2) Hole alle Credits als Array aus den Veranstaltungen

var credits = semester.veranstaltungen.map( function(veranstaltung){
  return veranstaltung.credits;
});

// Stimmt der Output?
console.log(credits);


// 3) .filter(function(element){...}) zum Filtern einer Sammlung
// Beispiel filtere alle Veranstaltungen, bei denen der Workload schon
// in der Seminarzeit erbracht wird. (Hint: 1 SWS entspricht 30 Workload)

var einfache = semester.veranstaltungen.filter( function(veranstaltung){
  // Eine Filter-Funktion **muss** immer true oder false zurückgeben!
  return veranstaltung.workload/30 == veranstaltung.sws;
});

// alle einfachen
console.log(einfache);


// 4) Sortiere die Veranstaltungen nach ihrem Titel

var sortiert = semester.veranstaltungen.sort(function(v1,v2){
  // Zum Sortieren muss das Ergebnis der Funktion 1, 0 oder -1 sein.
  if (v1.titel < v2.titel) return -1;
  if (v1.titel > v2.titel) return  1;
  else return 0;
});

// Was fällt auf?
console.log(semester.veranstaltungen,sortiert);


