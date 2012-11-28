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
