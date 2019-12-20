window.addEventListener("load", init);

var players = {
    "joueurs": [{
        "id": 0,
        "img": "assets/img/rask",
        "name": "Tuukka Rask",
        "poste": "Gardien",
        "description": "lorem",
        "stats": "256 victoires, 152 défaites"
    },
    {
        "id": 1,
        "img": "assets/img/krug",
        "name": "Torey Krug",
        "poste": "Défenseur",
        "description": "lorem",
        "stats": "12 Buts, 25 assists"   
    },
    {
        "id": 2,
        "img": "assets/img/bergeron",
        "name": "Patrice Bergeron",
        "poste": "Attaquant",
        "description": "lorem",
        "stats": "25 Buts, 48 assists"   
    },
    {
        "id": 3,
        "img": "assets/img/pasternak",
        "name": "David Pasternak",
        "poste": "Attaquant",
        "description": "lorem",
        "stats": "56 Buts, 14 assists"   
    }]
}

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis libero egestas, vitae ultricies nulla pharetra. Donec dapibus tincidunt mi, in luctus lorem elementum nec. Integer molestie ultrices volutpat. In in tempus est. Sed nisi mi, convallis ut condimentum a, vulputate a quam. Integer a euismod ex, ut aliquam eros. Suspendisse vitae sapien a massa posuere hendrerit. Cras vitae massa ac nunc commodo scelerisque vel eget magna. Suspendisse nibh nisl, vehicula vitae hendrerit at, sollicitudin vitae ipsum.";

function init(){
    document.getElementsByClassName("close")[0].addEventListener("click", close);
    genererTableau();
}

function genererTableau(){
    var table = document.getElementById("playersTable");

    while (table.childNodes.length > 1) {
        table.removeChild(table.lastChild);
    }

    for (var i = 0; i < players.joueurs.length; i++){
        var currentObject = players.joueurs[i];

        var tr = document.createElement("tr");
        tr.setAttribute("class", "zoom");

        var td_img = document.createElement("td");
        var img = document.createElement("img");
        img.setAttribute("src", currentObject.img + ".jpg");
        td_img.appendChild(img);

        var td_name = document.createElement("td");
        td_name.innerHTML = currentObject.name;

        var td_poste = document.createElement("td");
        td_poste.innerHTML = currentObject.poste;

        var td_description = document.createElement("td");
        if (currentObject.description == "lorem"){
            td_description.innerHTML = lorem;
        } else {
            td_description.innerHTML = currentObject.description;
        }

        var a = document.createElement("a");
        a.innerHTML = "Statistiques";
        a.setAttribute("href", "#");
        a.setAttribute("class", "custom_button");
        a.addEventListener("click", function(e) {
            getStats(e.target.parentElement.parentElement.children[1].innerHTML);
        });

        var a_modif = document.createElement("a");
        a_modif.innerHTML = "Modifier";
        a_modif.setAttribute("href", "#");
        a_modif.setAttribute("class", "custom_button");
        a_modif.addEventListener("click", function(e) {
            modifier(e.target.parentElement.parentElement.children[1].innerHTML);
        });
        var a_sup = document.createElement("a");
        a_sup.innerHTML = "Supprimer";
        a_sup.setAttribute("href", "#");
        a_sup.setAttribute("class", "custom_button");
        a_sup.addEventListener("click", function(e) {
            supprimer(e.target.parentElement.parentElement.children[1].innerHTML);
        });


        var td_btn = document.createElement("td");
        td_btn.appendChild(a);
        td_btn.appendChild(a_modif)
        td_btn.appendChild(a_sup)
        
        tr.appendChild(td_img);
        tr.appendChild(td_name);
        tr.appendChild(td_poste);
        tr.appendChild(td_description);
        tr.appendChild(td_btn);

        table.appendChild(tr);
    }
}

function getStats(name){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    var modal_content = document.getElementById("modal-content");

    while (modal_content.childNodes.length > 2) {
        modal_content.removeChild(modal_content.lastChild);
    }

    var found = false;
    var i = 0;
    
    while (!found){
        if (name === players.joueurs[i].name){
            found = true;
        }
        i++;
    }

    var h1 = document.createElement("h1");
    h1.innerHTML = name;

    var p = document.createElement("p");
    p.innerHTML = "Poste : " + players.joueurs[i - 1].poste + "<br>Stats : " + players.joueurs[i - 1].stats

    modal_content.appendChild(h1);
    modal_content.appendChild(p);
}

function supprimer(name){
    var found = false;
    var i = 0;
    
    while (!found){
        if (name === players.joueurs[i].name){
            found = true;
        }
        i++;
    }
    players.joueurs.splice(i - 1, i -1);
    genererTableau()
}

function modifier(name){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    var modal_content = document.getElementById("modal-content");

    while (modal_content.childNodes.length > 2) {
        modal_content.removeChild(modal_content.lastChild);
    }

    var p = document.createElement("p");
    p.innerHTML = 'La fonctionnalité "Modifier" est en cours de développement... '

    modal_content.appendChild(p);
}

function close(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}