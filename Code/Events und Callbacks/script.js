// =========================================
// = Das neue Semester-Objekt in Anwendung =
// =========================================

var horst = new Student("Horst Hansen",2,2410345,"Interfacedesign","MA");

var semester = new Semester(horst,"WS","2012/13");

var v = new Veranstaltung("Scriptings",2,3,"14:30-16:00","Mittwoch");

semester.addVeranstaltung(v);

console.log(semester);

console.log("Habe ich genügen Credits?", semester.creditsCompleted());

console.log("Wieviel Workload habe ich in diesem Semester?", semester.getGesamtWorkload());

