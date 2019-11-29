window.addEventListener("load", init);

var players = {
    "joueurs": [{
        "id": 0,
        "img": "assets/img/rask",
        "name": "Tuukka Rask",
        "poste": "Gardien",
        "description": "lorem",
    },
    {
        "id": 1,
        "img": "assets/img/krug",
        "name": "Torey Krug",
        "poste": "Défenseur",
        "description": "lorem",   
    },
    {
        "id": 2,
        "img": "assets/img/bergeron",
        "name": "Patrice Bergeron",
        "poste": "Attaquant",
        "description": "lorem",
    },
    {
        "id": 3,
        "img": "assets/img/pasternak",
        "name": "David Pasternak",
        "poste": "Attaquant",
        "description": "lorem",
    }]
}

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis libero egestas, vitae ultricies nulla pharetra. Donec dapibus tincidunt mi, in luctus lorem elementum nec. Integer molestie ultrices volutpat. In in tempus est. Sed nisi mi, convallis ut condimentum a, vulputate a quam. Integer a euismod ex, ut aliquam eros. Suspendisse vitae sapien a massa posuere hendrerit. Cras vitae massa ac nunc commodo scelerisque vel eget magna. Suspendisse nibh nisl, vehicula vitae hendrerit at, sollicitudin vitae ipsum.";

function init(){
    document.getElementsByClassName("close")[0].addEventListener("click", close);
    genererTableau();
}

function genererTableau(){
    var table = document.getElementById("playersTable");

    console.log(players.joueurs);
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

        var td_btn = document.createElement("td");
        td_btn.appendChild(a);
        
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
}

function close(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}