
/*
let list = [7, 5, 4, 3, 5, 5, 4, 6, 7, 8, 9, 8, 4, 7, 3, 1, 8, 9, 6, 5, 4, 5, 4, 8, 9, 3, 6, 8, 9, 9];
let total = 0;
let moyenne = 0;
for(let t = 0; t < 29; t + 1){
    total = total + list[t];
}
moyenne = total / 29;
console.log(moyenne);

let bonjour = "Bonjour";
*/

/*faire su code en boucle 

1- Boucle while
tanque (condition){
    fais ça
}
*/
/*
while (2 >1){
    console.log("Bonjour")
}
*/
let tokpa = 0;
while (tokpa < 100){
    tokpa = tokpa + 1;
    console.log("Welcome to Tokpastein" +tokpa)
}
let ab = 0; 
while (ab <= 10){
    console.log("I love you" +ab); 
    ab++;
}

let e = ["Tokpa","Fabrice","Romaric",true,false,24];

for (let k = 0; k <=e.length-1; k++){
    console.log(k+" "+e[k]);
}
var koo = 0;
var me = ++koo;
console.log(koo);
console.log(me);

var number = 1;
while (number < 50){
    number++;
}
console.log("This is number"+number);


var tokpastein = '', tokpan, proceed = true;
while(proceed) {
    tokpan = prompt('Entrez votre prenom:');
    
    if(tokpan){
        tokpastein += `${tokpan}`;
} else{
        break;
    }
}
alert(tokpastein);

/*

var nicks = '', nick, proceed = true;
while (proceed) {
nick = prompt('Entrez un prénom :');
if (nick) {
nicks += nick + ' '; // Ajoute le nouveau prénom ainsi qu'une espace juste après
} else {
proceed = false; // Aucun prénom n'a été entré, donc on fait en sorte d'invalider la condition
} }
alert(nicks); // Affiche les prénoms à la suite
*/