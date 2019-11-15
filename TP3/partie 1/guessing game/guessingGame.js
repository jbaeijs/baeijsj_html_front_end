function init(){

    var randNumber = Math.floor(Math.random() * 11);
    console.log(randNumber);
    var tries = 3;
    var victoire = false;

    while (tries > 0 && victoire == false){
        var choix = parseInt(window.prompt("Entrez votre nombre entre 1 et 10 : ", "Votre réponse"));
        if (Number.isInteger(choix) && choix <= 10 && choix >= 0){
            if (choix < randNumber){
                window.alert("Votre nombre est trop petit");
            }
            else if (choix > randNumber){
                window.alert("Votre nombre est trop grand");
            } else {
                victoire = true;
                window.alert("Gagné !");
            }
        } else {
            window.alert("Seulement des chiffres entier entre 0 et 10 !");
        }
    tries--;
    }
    if (tries == 0 && victoire == false){
        window.alert("Perdu !");
    } 
}
 
window.onload = init;
