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


