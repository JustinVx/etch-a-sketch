jQuery(document).ready(function() {
  $('.title-message').html("<h1>Ready to start!</h1>");
  var current_color = "#DB504A"

  function create_blocks(height_b, width_b) {
    $('.block').remove();
    if (height_b > 100) {heigth_b = 100;}
    if (width_b > 100) {width_b = 100;}
    var amount = height_b * width_b;

    var width_of_a_single_block = 320 / width_b;
    for (i = 0; i < amount; i++){
      $('.grid').append("<div class=\"block\"></div>");
      $('.title-message').html(i);
    }
    $('.block').css("width", width_of_a_single_block + "px");
    $('.block').css("height", width_of_a_single_block + "px");
    $('.grid').css("width", 320 + "px");
  }

  create_blocks(12, 12);

  setInterval(function(){
    var random_color = 'rgb(' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ')';
    $('#rainbow').css("background-color", random_color);
  },1000);

  $('button').click(function(){
    $('.title-message').html("<h1>Grid created!</h1>");
    //var height_blocks = $('#heigth_blocks').val();
    //var width_blocks = $('#width_blocks').val();
    //$('.title-message').html("<h1>Test: " + width_blocks + "</h1>");
    $('.input-fields').hide();
    // werkt nu niet: if (!heigth_blocks) {heigth_blocks = 12;}
    // werkt nu niet: if (!width_blocks) {width_blocks = 12;}
    create_blocks(12, 12);
  })
  
  $('.color').click(function(){
    current_color = $(this).css("background-color");
    $('.color').css("border-radius", "50%");
    $(this).css("border-radius", "0%");
  })

  $(document).on('mouseenter', '.block', function() {
    if (current_color === "rgb(0, 0, 0)"){
      $('.title-message').html("<h1>BLACK</h1>");
      current_color = 'rgb(' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ')';
    }
    $(this).css("background-color", current_color);
  });

})
