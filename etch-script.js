jQuery(document).ready(function() {
  $('.title-message').html("<h1>Ready to start!</h1>");
  var black_blocks = 0;

  function create_blocks(amount, row_length) {
    var count = 0;
    for (i = 0; i < amount; i++){
      $('.grid').append("<div class=\"block\"></div>");
      count++;
    }
    $('.title-message').html("<h1>Amount of blocks: " + count + "</h1>");
    $('.grid').css("width", row_length*20 + "px")
  }

  function count_black(){
    black_blocks++;
    $('.title-message').html("<h1>Amount of black blocks: " + black_blocks + "</h1>");
  }

  $('button').click(function(){
    $('.title-message').html("<h1>Grid created!</h1>");
    $(this).remove();
    create_blocks(400, 20);
  })

  $(document).on('mouseenter', '.block', function() {
    $(this).css("background-color", "black");
    count_black();
  });

})
