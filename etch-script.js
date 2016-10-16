jQuery(document).ready(function() {
  $('.title-message').html("<h1>Ready to start!</h1>");

  function create_blocks(amount) {
    var count = 0;
    for (i = 0; i < amount; i++){
      $('.grid').append("<div class=\"block\"></div>");
      count++;

    }
    $('.title-message').html("<h1>Amount of blocks:" + count + "</h1>");
  }

  $('button').click(function(){
    $('.title-message').html("<h1>Grid created!</h1>");
    $(this).remove();
    create_blocks(7);
    $('.block').css("background-color", "red");
    $('.block').css("width", "50px");
    $('.block').css("height", "50px");
  })
})
