window.addEventListener("load", init);

function init(){
    document.getElementById("btn_submit").addEventListener("click", valider);
}

var france = ["Paris", "Marseille", "Lyon", "Grenoble"];
var belgique = ["Bruxelles", "Ostende", "Liège", "Bruges"];
var italie = ["Rome", "Turin", "Naples", "Milan"];
var espagne = ["Barcelonne", "Madrid", "Séville", "Bilbao"];

function valider(){
    var btn = document.getElementById("btn_submit");
    var saisie = document.getElementById("pays_select").value;
    var div = document.getElementById("recoContainer");
    var list = document.getElementById("list");
    var trouve = false;
    var pays;

    if (france.includes(saisie)){
        tempList = france;
        pays = "France";
        trouve = true;
    } 
    else if (belgique.includes(saisie)){
        tempList = belgique;
        pays = "Belgique";
        trouve = true;
    }
    else if (italie.includes(saisie)){
        tempList = italie;
        pays = "Italie";
        trouve = true;
    }
    else if (espagne.includes(saisie)){
        tempList = espagne;
        pays = "Espagne";
        trouve = true;
    }

    if (trouve == true){
        if (btn.innerHTML == "Ajouter destination"){
            var choix = window.confirm("Voulez vous ajouter " + saisie + " en " + pays + " ?");
    
            if (choix){
                afficheRecommandations(btn, div, pays);
            }
        } else {
            afficheRecommandations(btn, div, pays);
        }
    } else {
        window.alert("Ce pays n'est pas disponible !");
    }
}

function afficheRecommandations(btn, div, pays){
    var p = document.createElement("p");
    p.innerHTML = "Bienvenue en " + pays + ", Nous vous recommandons les villes : "

    var ul = document.createElement("ul");

    for (var i = 0; i < tempList.length; i++){
        var li = document.createElement("li");
        li.innerHTML = tempList[i];

        ul.appendChild(li);
    }
    btn.innerHTML = "Ajouter destination";

    div.appendChild(p);
    div.appendChild(ul);
}