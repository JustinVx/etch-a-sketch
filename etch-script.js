jQuery(document).ready(function() {
  $('.title-message').html("<h1>Ready to start!</h1>");
  var black_blocks = 0;

  function create_blocks(height_b, width_b) {
    var count = 0;
    var amount = height_b * width_b;
    var width_of_a_single_block = 320 / width_b;
    for (i = 0; i < amount; i++){
      $('.grid').append("<div class=\"block\"></div>");
      count++;
    }
    $('.block').css("width", width_of_a_single_block + "px");
    $('.block').css("height", width_of_a_single_block + "px");
    $('.grid').css("width", 320 + "px");
  }

  function count_black(){
    black_blocks++;
    $('.title-message').html("<h1>Amount of black blocks: " + black_blocks + "</h1>");
  }

  $('button').click(function(){
    $('.title-message').html("<h1>Grid created!</h1>");
    var height_blocks = $('#heigth_blocks').val();
    var width_blocks = $('#width_blocks').val();
    //$('.title-message').html("<h1>Test: " + width_blocks + "</h1>");
    $(this).hide();
    $('.input-fields').hide();
    //werk nu niet: if (!heigth_blocks) {heigth_blocks = 12;}
    // werkt nu niet: if (!width_blocks) {width_blocks = 12;}
    create_blocks(height_blocks, width_blocks);
  })

  $(document).on('mouseenter', '.block', function() {
    $(this).css("background-color", "#DB504A");
    count_black();
  });

})
