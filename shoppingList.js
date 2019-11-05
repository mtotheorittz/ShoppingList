//
var input = document.getElementById("myInput");
var selectedList;
//
//
//
document.getElementById("listSelect").addEventListener('change', function(event) {
  selectedList = event.target.value;
  console.log(event.target.value);      //Set ID of list, if LISTSELECT changes
  getList(event.target.value);          //gibt  ausgewählte Liste aus
});
//
document.getElementById("listSelect").addEventListener('mouseover', function(event) {
selectedList = event.target.value;
getList(event.target.value);
});
//
//
//Checkbox
document.addEventListener('change', function (e) {

    if (e.target.name === 'checkItems') {
      if (e.target.checked) {
        e.target.parentNode.className = 'selected';
        setTimeout(function() {
          removeItem(e.target.id);         //löscht Item wenn angekreuzt nach 3 sek
        }, 3000);
      } else {
        e.target.parentNode.className = '';   
      }
    }
});
//
//
//
function showItemLists(lists) {  //gibt ausgewählte Liste aus
 
  var id = loadListId();     // aktuelle Listen ID
  var select = document.getElementById("listSelect");
  var html = '';    //String
  lists.forEach(list => {  //speichert ID von aktueller Liste
    if (!id) {             
      id = list._id;
      storeListId(id);
    }
    var selected = id === list._id ? true : false;    //...und gibt Items aus
    if (selected) {
      addItemList(list);
    }
    html += '<option selected="'+selected+'" value="'+list._id+'">'+list.name+'</option>';  //...und gibt Listenname in DD-Menü aus
  });
  select.innerHTML = html;
}
//
//
//
function addItemList(list) {        //Fügt Item zu Liste hinzu
  var div = document.getElementById("item-list");
  var html  = "";
  list.items.forEach(item => {
    html +=  '<label><input name="checkItems" id="'+item._id+'" type="checkbox" /><span class="checkbox-ghost"> </span>'+item.name+'</label>';
  });
  div.innerHTML = html;
}
//
//
//
input.addEventListener("keydown", function(event) {
  if (event.which == 13 || event.keyCode == 13) {       // Number 13 is the "Enter" key on the keyboard
    event.preventDefault();
    addItem(input.value);     // & führt AddItem Funktion aus
  }
});
//
//
// Delete-Button zum Löschen von Listen
var deleteBtn = document.getElementById("deleteIcon");

deleteBtn.onclick = function () {
  deleteList(selectedList);   
 //window.location.reload();     // <-- evtl. um Seite danach neu zu laden       
}
//
// 
// Modal Funktionen
var addBtn = document.getElementById("addListButton");
var modal = document.getElementById("listAddModal");
var btn = document.getElementById("addList");
var span = document.getElementsByClassName("close")[0];
//
addBtn.onclick = function() { 
	var newListName = document.getElementById("newList").value;
	addList(newListName)
	var listJson = {"name": newListName};   //neue Liste anlegen
  console.log(listJson);
  //window.location.reload();      //<-- evtl. um Seite danach neu zu laden 
}
//
btn.onclick = function() {
  modal.style.display = "block";
}
//
span.onclick = function() {
  modal.style.display = "none";
}
//
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$("#myTopnav").click(function(){
  $(".topnav").css("background-color", "blue");
});

