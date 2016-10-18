jQuery(document).ready(function() {

  var current_color = "#DB504A";
  var max_width = 450;
  var default_width = 12;
  var default_height = 12;
  var count_px_colored = 0;

  $('.title-message').html("<h1>Ready to start!</h1>");
  $('#red').css("border-radius", "0%");
  create_blocks(default_height, default_width);

  function create_blocks(height_b, width_b) {
    $('.block').remove();
    if (isNaN(height_b) || isNaN(width_b)) {
      $('.input-opacity-overlay').css("display", "block");
      $('.input-block').css("display", "block");
      $('#the_height_text_and_also_a_warning').html("Wrong input.");
      $('#the_width_text').html("Will open default grid.");
      $('input').css("display", "none");
      setTimeout(function() {
        $('.input-block').css("display", "none");
        $('.input-opacity-overlay').css("display", "none");
        $('input').css("display", "inline-block");
        $('#the_height_text_and_also_a_warning').html("height:");
        $('#the_width_text').html("width:");
        $('.amount-blocks-text').html();
      }, 2000);
    }
    if (height_b > 100 || isNaN(height_b)) {
      height_b = default_height;
    }
    if (width_b > 100 || isNaN(width_b)) {
      width_b = default_width;
    }
    var amount = height_b * width_b;
    var width_of_a_single_block = max_width / width_b;
    for (i = 0; i < amount; i++){
      $('.grid').append("<div class=\"block\"></div>");
    }
    $('.block').css("width", width_of_a_single_block + "px");
    $('.block').css("height", width_of_a_single_block + "px");
    $('.grid').css("width", max_width + "px");
  }

  $('#new-grid').click(function(){
    $('.input-opacity-overlay').css("display", "block");
    $('.input-block').css("display", "block");
  })

  $('#confirm-new-grid').click(function(){
    $('.title-message').html("<h1>Grid created!</h1>");
    var height_blocks = $('#heigth_blocks').val();
    var width_blocks = $('#width_blocks').val();
    $('.input-block').css("display", "hide");
    $('.input-opacity-overlay').css("display", "hide");
    if (!width_blocks) {width_blocks = default_width;}
    if (!height_blocks) {height_blocks = default_height;}
    create_blocks(height_blocks, width_blocks);
  })

  $('.close-input-block').click(function(){
    $('.input-block').css("display", "hide");
    $('.input-opacity-overlay').css("display", "hide");
  })

  setInterval(function(){
    var random_color = 'rgb(' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ')';
    $('#rainbow').css("background-color", random_color);
  },1000);

  $('.color').click(function(){
    current_color = $(this).css("background-color");
    $('.color').css("border-radius", "50%");
    $(this).css("border-radius", "0%");
    $('.title-wrapper').css("background", current_color);
  })

  $(document).on('mouseenter', '.block', function() {
    if (current_color === "rgb(0, 0, 0)"){
      current_color = 'rgb(' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ')';
    }
    $(this).css("background-color", current_color);

    count_px_colored++;
    awesome_wave(count_px_colored);
  });

  function awesome_wave(count) {
    var the_word_is_awesome = "awesome";
    var this_is_the_number = count % 7;
    $('.title-message').html("<h1></h1>");
    for (i = 0; i < 7; i++) {
      if (i === this_is_the_number) {
        var test = the_word_is_awesome[this_is_the_number].toUpperCase();
        $('h1').append(test + " ");
      } else {
        $('h1').append(the_word_is_awesome[i] + " ");
      }
    };
  }

})
