// script.js
// omar kamal
// 12/28/19

// ensure everything has rendered
$(document).ready(function() {

    // value to check for enter key for keypress event
    const ENTER_KEY = 13;
    // tracker for list item counts
    var itemCount = 0;

    // add new item to list
    function addToList () {

        var userInput = $('#user-input').val();

        if (userInput.length > 0) {

            itemCount = itemCount + 1;
            var task = "task_" + (itemCount);

            // add a new item to the list and clear the user input from the input space
            $('#todo-list').append(`<li id=${task}>` + userInput + '<button class="done">-</button></li>');
            $('#user-input').css('border', 'none');
            $('#user-input').val('');

        } else {

            // if the user tries to give empty input then put a red border around the input space
            $('#user-input').css('border', '1px solid #f3c1c6');

        }
    };
    
    // try to add a new item to the list on enter key press or mouse click on #enter button
    $('#user-input').keypress(function () {
        if (event.which == ENTER_KEY) {
            addToList();
        }
    });
    $('#enter').click(addToList);

});

// delete a dynamically added list item on button press
$(document).on('click', '#todo-list button.done', function() {

    $(this).parent().remove();
    
});