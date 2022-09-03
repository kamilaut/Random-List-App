function newItem() {


  let inputValue = $('#input').val();

  let li = $("<li>"+inputValue+"</li>");

  if (inputValue === '') {
    alert("You can't leave me empty!");
  } else {
    $('#list').append(li);

    li.on("dblclick", function () {
      li.toggleClass("strike");
    });

    let crossOutButton = $('<Button></Button>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    function deleteListItem() {
      li.addClass("delete")
    }
    crossOutButton.on("click", deleteListItem);

  }

  $('#list').sortable();

}
