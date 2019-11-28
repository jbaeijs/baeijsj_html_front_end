window.addEventListener("load", init);

function init(){
    $("#btn_submit").click(valider);
}

var france = ["Paris", "Marseille", "Lyon", "Grenoble"];
var belgique = ["Bruxelles", "Ostende", "Liège", "Bruges"];
var italie = ["Rome", "Turin", "Naples", "Milan"];
var espagne = ["Barcelonne", "Madrid", "Séville", "Bilbao"];

function valider(){
    var btn = $("#btn_submit");
    var saisie = $("#pays_select").val();
    var div = $("#recoContainer");
    var trouve = false;
    var tempList;
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
        if (btn.text() === "Ajouter destination"){
            var choix = window.confirm("Voulez vous ajouter " + saisie + " en " + pays + " ?");
    
            if (choix){
                afficheRecommandations(btn, div, pays, tempList);
            }
        } else {
            afficheRecommandations(btn, div, pays, tempList);
        }
    } else {
        window.alert("Ce pays n'est pas disponible !");
    }
}

function afficheRecommandations(btn, div, pays, tempList){
    div.append("<p>Bienvenue en " + pays + ", Nous vous recommandons les villes :</p>");

    for (var i = 0; i < tempList.length; i++){
        var li = "<li>" + tempList[i] + "</li>";
        div.append("<ul>" + li + "</ul>");
    }
    btn.html("Ajouter Destination");
}