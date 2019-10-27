
//gibt Liste zurück
function getlist(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Items").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "https://shopping-lists-api.herokuapp.com/api/v1/lists/" + id, true);
    xhttp.send();
  }

//add
  function additem() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Items").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("POST", "https://shopping-lists-api.herokuapp.com/api/v1/lists/5d9c7b9ee2d16f00178a5c6b/items", true);
    xhttp.send();
  }

//remove item
function removeitem() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Items").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("DELETE", "https://shopping-lists-api.herokuapp.com/api/v1/lists/5d9c7b9ee2d16f00178a5c6b/items/ITEMID???", true);
    xhttp.send();
  }

  //update item
  function updateitem() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Items").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("PUT", "https://shopping-lists-api.herokuapp.com/api/v1/lists/5d9c7b9ee2d16f00178a5c6b/items/ITEMID???", true);
    xhttp.send();
  }

  
var itemid;

var id;

var optionListe;

welcheListe();

function welcheListe() {

  switch (optionListe) {

    case "Liste1":

      this.id = "5d9c7b9ee2d16f00178a5c6b";

      break;

    case "Liste2":

      this.id = "5db00803655dfa001785c029";

      break;

    default:

      this.id = "5db00809655dfa001785c02a";

  }

}

//switch case durch getElementById unnötig

document.getElementById("listSelect").addEventListener('change', function(event) {
  console.log(event.target.value); // Get ID of list
  getlist(event.target.value);
})
