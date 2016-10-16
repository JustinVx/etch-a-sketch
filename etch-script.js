jQuery(document).ready(function() {
  $('.title-message').html("<h1>Ready to start!</h1>");

  function create_blocks(amount, row_length) {
    var count = 0;
    for (i = 0; i < amount; i++){
      $('.grid').append("<div class=\"block\"></div>");
      count++;
    }
    $('.title-message').html("<h1>Amount of blocks: " + count + "</h1>");
    $('.grid').css("width", row_length*20 + "px")
  }

  $('button').click(function(){
    $('.title-message').html("<h1>Grid created!</h1>");
    $(this).remove();
    create_blocks(400, 20);
  })

  /*$('.block').hover(function(){
    $('.block').css("background-color", "black");
  })*/

  $(document).on('click', '.block', function() {
    $(this).css("background-color", "black");
  });

})
