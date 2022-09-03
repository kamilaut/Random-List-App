function newItem() {


  let inputValue = $('#input').val();

  let li = $("<li>"+inputValue+"</li>");

  if (inputValue === '') {
    alert("You can't leave me empty!");
  } else {
    $('#list').append(li);
  }

  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  function deleteListItem() {
    li.addClass("delete")
  }
  crossOutButton.on("click", deleteListItem);


  $('#list').sortable();

}
