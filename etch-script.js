jQuery(document).ready(function() {
  $('.title-message').html("<h1>Ready to start!</h1>");
  var black_blocks = 0;

  function create_blocks(height_b, width_b) {
    var count = 0;
    var amount = height_b * width_b;
    for (i = 0; i < amount; i++){
      $('.grid').append("<div class=\"block\"></div>");
      count++;
    }
    $('.grid').css("width", width_blocks*20 + "px")
  }

  function count_black(){
    black_blocks++;
    $('.title-message').html("<h1>Amount of black blocks: " + black_blocks + "</h1>");
  }

  $('button').click(function(){
    $('.title-message').html("<h1>Grid created!</h1>");
    var height_blocks = $('#heigth_blocks').val();
    var width_blocks = $('#width_blocks').val();
    $('.title-message').html("<h1>Test: " + width_blocks + "</h1>");
    $(this).remove();
    $('.input-fields').remove();
    //height_blocks = parseInt(height_blocks);
    create_blocks(height_blocks, height_blocks);

  })

  $(document).on('mouseenter', '.block', function() {
    $(this).css("background-color", "black");
    count_black();
  });

})
