// ===========================
// = in Events und Callbacks =
// ===========================


// Einfache Event-Struktur
var counter = 0;
var runner = function(onalways){
  counter++;
  onalways();
}

var onalwaysHandler = function(){
  console.log(counter);
}

// Der runner wird 5 mal aufgerufen:
runner(onalwaysHandler);
runner(onalwaysHandler);
runner(onalwaysHandler);
runner(onalwaysHandler);
runner(onalwaysHandler);


// Einfache Browser Events

window.onload = function(event) {};

window.onbeforeunload = function(event) {};

window.onclick = function(event) {};


// -- Document Elemente mit Callbacks versehen
var b = document.getElementsByTagName('body')[0];
b.onclick = function(event) {
  console.log("Klick auf den Body!", event)
};
// Schlägt fehl, da das Dokument noch nicht vollständig geladen ist.
// Ergo b ist undefined!

// -- Elemente erst suchen, wenn das gesamte dokument geladen ist
window.onload = function() {
  // -- Document Elemente
  var b = document.getElementsByTagName('body')[0];
  b.onclick = function(event) {
    console.log("Klick aus dem 2. Callback", event)
  }; // schlägt nicht mehr fehl!
};
