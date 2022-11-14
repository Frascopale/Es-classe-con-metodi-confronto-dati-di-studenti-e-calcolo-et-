/* Esercizio 0:
creare una classe Student, con i seguenti campi:
nome, cognome, data di nascita, hobby, motto
e i metodi:
getAge() -> "$Nome ha X anni"
getMotto() -> "Il motto di $Nome e' $Motto"
Bonus:
compareAge(s1, s2) ritorna true se s1 piu' vecchio
haveSameHobby(s1,s2)*/

const Student = require ('./Student');


const alunnoa= new Student ("alunnoa","cognome1","11/01/1996","canto","si salvi chi può");
const alunnob= new Student ("alunnob","cognome2","10/17/1992","canto","finchè la barca va lasciala andare");

alunnoa.getAge();
alunnoa.getMotto();

let vecchio = alunnoa.compareAge(alunnoa,alunnob);
console.log(vecchio);

 
 let hobbys = alunnoa.compareHobby(alunnoa,alunnob);
 console.log(hobbys);
