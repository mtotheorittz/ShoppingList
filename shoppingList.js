var input = document.getElementById("myInput");


document.getElementById("listSelect").addEventListener('change', function(event) {
  console.log(event.target.value); // Get ID of list
  getList(event.target.value);
});
document.getElementById("listSelectMobile").addEventListener('change', function(event) {
  console.log(event.target.value); // Get ID of list
  getList(event.target.value);
});



//Checkbox
document.addEventListener('change', function (e) {

    if (e.target.name === 'checkItems') {
      if (e.target.checked) {
        e.target.parentNode.className = 'selected';
        setTimeout(function() {
          removeItem(e.target.id);
        }, 3000);
      } else {
        e.target.parentNode.className = '';
      }
    }
});

function showItemLists(lists) {
  // 
  var id = loadListId();
  var select = document.getElementById("listSelect");
  var html = '';
  lists.forEach(list => {
    if (!id) {
      id = list._id;
      storeListId(id);
    }
    var selected = id === list._id ? true : false;
    if (selected) {
      addItemList(list);
    }
    html += '<option selected="'+selected+'" value="'+list._id+'">'+list.name+'</option> ';
  });
  select.innerHTML = html;
}
function showItemLists(lists) {
  // 
  var id = loadListId();
  var select = document.getElementById("listSelectMobile");
  var html = '';
  lists.forEach(list => {
    if (!id) {
      id = list._id;
      storeListId(id);
    }
    var selected = id === list._id ? true : false;
    if (selected) {
      addItemList(list);
    }
    html += '<option selected="'+selected+'" value="'+list._id+'">'+list.name+'</option> ';
  });
  select.innerHTML = html;
}

function addItemList(list) {
  var div = document.getElementById("item-list");
  var html  = "";
  list.items.forEach(item => {
    html +=  '<label><input name="checkItems" id="'+item._id+'" type="checkbox" /><span class="checkbox-ghost"> </span>'+item.name+'</label>';
  });
  div.innerHTML = html;
}

// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keydown", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.which == 13 || event.keyCode == 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    addItem(input.value);
    // Trigger the button element with a click
//    document.getElementById("myBtn").click();
  }
});




