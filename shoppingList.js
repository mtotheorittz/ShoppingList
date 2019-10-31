
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
function additem(input) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(input).innerHTML =
      this.responseText;
    }
  };
  xhttp.open("POST", "https://shopping-lists-api.herokuapp.com/api/v1/lists/"+id+"/items", true);
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
  xhttp.open("DELETE", "https://shopping-lists-api.herokuapp.com/api/v1/lists/"+id+"/items/ITEMID???", true);
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
  xhttp.open("PUT", "https://shopping-lists-api.herokuapp.com/api/v1/lists/"+id+"/items/ITEMID???", true);
  xhttp.send();
}



document.getElementById("listSelect").addEventListener('change', function(event) {
console.log(event.target.value); // Get ID of list
getlist(event.target.value);
})


//Checkbox
document.addEventListener('change', function (e) {

    if (e.target.name === 'checkItems') {
      if (e.target.checked) {
        e.target.parentNode.className = 'selected';
      } else {
        e.target.parentNode.className = '';
      }
    }
});


// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keydown", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});



