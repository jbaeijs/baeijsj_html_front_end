window.addEventListener("load", init);

function init(){
    document.getElementById("form").addEventListener("submit", city);
}

var france = ["Paris", "Marseille", "Lyon", "Grenoble"];
var belgique = ["Bruxelles", "Ostende", "Liège", "Bruges"];
var italie = ["Rome", "Turin", "Naples", "Milan"];
var espagne = ["Barcelonne", "Madrid", "Séville", "Bilbao"];

function city(){

    var saisie = document.getElementById("pays_select").value;

    var trouve = false;
    var pays;
    var tempList;

    if (france.includes(saisie)){
        tempList = "France";
        trouve = true;
    } 
    else if (belgique.includes(saisie)){
        tempList = "Belgique";
        trouve = true;
    }
    else if (italie.includes(saisie)){
        tempList = "Italie";
        trouve = true;
    }
    else if (espagne.includes(saisie)){
        tempList = "Espagne";
        trouve = true;
    }

    if (trouve){
        window.alert("Bienvenue " + tempList);
    } else {
        window.alert("Cette ville n'est pas dans la liste !");
    }
}