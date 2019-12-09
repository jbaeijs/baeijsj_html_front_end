window.addEventListener("load", init);

var players = {
    "joueurs": [{
        "id": 0,
        "img": "assets/img/rask",
        "name": "Tuukka Rask",
        "poste": "Gardien",
        "description": "lorem",
        "statistiques": {

        }
    },
    {
        "id": 1,
        "img": "assets/img/halak",
        "name": "Jaroslav Halak",
        "poste": "Gardien",
        "description": "lorem",
        "statistiques": {
            
        }
    },
    {
        "id": 2,
        "img": "assets/img/krug",
        "name": "Torey Krug",
        "poste": "Défenseur",
        "description": "lorem",
        "statistiques": {
            
        }   
    },
    {
        "id": 3,
        "img": "assets/img/chara",
        "name": "Zdeno Chara",
        "poste": "Défenseur",
        "description": "lorem",
        "statistiques": {
            
        }
    },
    {
        "id": 4,
        "img": "assets/img/marchand",
        "name": "Brad Marchand",
        "poste": "Attaquant",
        "description": "lorem",
        "statistiques": {
            
        }
    },
    {
        "id": 5,
        "img": "assets/img/bergeron",
        "name": "Patrice Bergeron",
        "poste": "Attaquant",
        "description": "lorem",
        "statistiques": {
            
        }
    },
    {
        "id": 6,
        "img": "assets/img/pasternak",
        "name": "David Pasternak",
        "poste": "Attaquant",
        "description": "lorem",
        "statistiques": {
            
        }
    },]
}

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis libero egestas, vitae ultricies nulla pharetra. Donec dapibus tincidunt mi, in luctus lorem elementum nec. Integer molestie ultrices volutpat. In in tempus est. Sed nisi mi, convallis ut condimentum a, vulputate a quam. Integer a euismod ex, ut aliquam eros. Suspendisse vitae sapien a massa posuere hendrerit. Cras vitae massa ac nunc commodo scelerisque vel eget magna. Suspendisse nibh nisl, vehicula vitae hendrerit at, sollicitudin vitae ipsum.";

function init(){
    document.getElementsByClassName("close")[0].addEventListener("click", close);
    genererTableau();
}

function genererTableau(){
    var container_div = document.getElementById("cardHolder");
    for (var i = 0; i < players.joueurs.length; i++){
        var currentObject = players.joueurs[i];
        
        var card_div = document.createElement("div");
        card_div.setAttribute("class", "card card-div shadow p-3 mb-5 bg-white rounded zoom");

        var card_img = document.createElement("img");
        card_img.setAttribute("src", currentObject.img + ".jpg");
        card_img.setAttribute("class", "card-img-top")

        var card_body = document.createElement("div");
        card_body.setAttribute("class", "card-body");

        var card_title = document.createElement("h5");
        card_title.innerHTML = currentObject.name;
        card_title.setAttribute("class", "card-title");

        var card_poste = document.createElement("h6");
        card_poste.innerHTML = currentObject.poste;
        card_poste.setAttribute("class", "card-title");

        var card_description = document.createElement("p");
        card_description.innerHTML = currentObject.description;
        card_description.setAttribute("class", "card-text");

        var card_button = document.createElement("a");
        card_button.setAttribute("href", "#");
        card_button.setAttribute("class", "custom_button");
        card_button.innerHTML = "Statistiques";
        card_button.addEventListener("click", function(e) {
            getStats(e.target.parentElement.children[1].innerHTML);
        });

        card_div.appendChild(card_img);
        card_div.appendChild(card_title);
        card_div.appendChild(card_poste);
        card_div.appendChild(card_description);
        card_div.appendChild(card_button);
        
        container_div.appendChild(card_div);
    }
}

function getStats(name){
    console.log(name);
    $("#myModal").modal('show');
}

function close(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}