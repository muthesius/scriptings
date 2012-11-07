// ===================================================
// = Basics in Javascript – Variablen und Operatoren =
// ===================================================

// Zum Einstieg öffne die Brwoser-Console und setze ein:
var name = "Jens";
console.log("Mein name ist" + name);

// Wenn du eine neuen Speicher brauchst, verwende __var__, um diesem
// einen Namen zu geben. Danach brauchst du __var__ erst wieder bei einem
// neuen Namen.

var status;       // Es muss nicht immer ein Wert zugewiesen werden.
var level, score; // mehrere Variablen auf einen Schlag sind auch möglich

// Wenn der Variable kein Wert zugewiesen wurde ist die _undefined_
// Versuche folgende Zeilen in der Console, um den Unterschied zu sehen:

console.log(status);

status = "alive!"; // Jetzt hat _status_ einen Wert

console.log(status);


// Die Sache mit der "dynamischen Typisierung"

var eineVariable = 1; // Die Variable speichert eine Nummer mit dem Wert 1
eineVariable = "Hallo Welt!"; // Nun wird in den selben Speicher Text gelegt
eineVariable = 3.14; // Und wieder eine Nummer – diesmal eine Kommazahl


// console.log Varianten 
console.log(name);
console.log(name,status); // Auch mehrere Variablen auf einmal
console.warn("Achtung! "+name+" kommt nun in Level "+level+"!");
console.error("Game Over!")


// Mit dem Rechner rechnen
var level = 1;
level = level + 1;
level = level - 1;
level = level * 1;
level = level / 2; // welche Rolle spielt der . ?

// Die gleichen Operationen können auch mit kombinierten Operatoren erfolgen
var level = 1;
level += 1;
level -= 1;
level *= 1;
level /= 2;


// "Rechnen" mit Text
var name = "Klaus";
name = name + " Dieter";
name += " Müller";
var level = 1;
status += name +" ist im ";
status += level +" Level!";


// NaN heißt „Not a Number“
2 + " Jens"; // geht
// JS konvertiert die 2 automatisch in Text, daher OK

2.33 * "Jens"; // Hier geht dies allerdings nicht mehr, daher NaN!


// ===========
// = Aufgabe =
// ===========

// Finde 5 _kreative_ NaNs

// Tip: mit dem Befehl isNaN(...mein NaN-Ausdruck..); kannst Du prüfen, ob
// du __wirklich__ ein NaN produziert hast!