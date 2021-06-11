$(".list-show-grid-hide").hide();
$(document).ready(function () {
  /*--------------------- Add active class to the current button (highlight it) start-------------------------------------------*/
  var header = document.getElementById("myDIV");
  var btns = header.getElementsByClassName("nav-link");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
  /*--------------------- Add active class to the current button (highlight it) end-------------------------------------------*/




  jQuery("#buttons .Institute-logo-btns").click(function () {
    jQuery("#buttons .Institute-logo-btns").removeClass('active');
    jQuery(this).toggleClass('active');
  });
  /*--------------------- Add active class to the grid and list (highlight it) -------------------------------------------*/
  jQuery("#grid-list .icon-color").click(function () {
    jQuery("#grid-list .icon-color").removeClass('active');
    jQuery(this).toggleClass('active');
  });

  /*--------------------- Add active class to the grid and list (highlight it)-------------------------------------------*/

  /*------------------------------------------range slider start--------------------------------------------------------------*/
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1000000,
    values: [0, 1000000],
    slide: function (event, ui) {
      $("#amount").html("₹" + ui.values[0] + " - " + ui.values[1]);
    }
  });


  $("#slider-range-min-2").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount2").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount2").val("(0/10)");


  $("#slider-range-min-3").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount3").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount3").val("(0/10)");


  $("#slider-range-min-4").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount4").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount4").val("(0/10)");


  $("#slider-range-min-5").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount5").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount5").val("(0/10)");






  $("#slider-range-min-6").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount6").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount6").val("(0/10)");


  $("#slider-range-min-7").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount7").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount7").val("(0/10)");


  $("#slider-range-min-8").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount8").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount8").val("(0/10)");


  $("#slider-range-min-9").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount9").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount9").val("(0/10)");



  /*------------------------------------------range slider end-----------------------------------------------------------------*/



  $('#list').click(function (event) {
    event.preventDefault();
    console.log("I am in 1  ")
    $('#products .item').addClass('list-group-item');
    $(".list-show-grid-hide").show();
    $(".inner").addClass('list-h6');
    $(".inner").removeClass('grid-h6');
    $()
  });

  $('#grid').click(function (event) {
    event.preventDefault();
    console.log("I am in 2 ")
    $('#products .item').removeClass('list-group-item');
    $('#products .item').addClass('grid-group-item');
    $(".inner").removeClass('list-h6');

    $(".inner").addClass('grid-h6');

    $(".list-show-grid-hide").hide();
  });
  var sim = 0

  if (sim < 3) { $('.myratings').css('color', 'reblackd'); $(".myratings").text("(" + sim + ")Review"); } else { $('.myratings').css('color', 'black'); $(".myratings").text("(" + sim + ")Review"); }

  $("input[type='radio']").click(function () {
    var sim = $("input[type='radio']:checked").val();
    //alert(sim);
    if (sim < 3) { $('.myratings').css('color', 'black'); $(".myratings").text("(" + sim + ")Review"); } else { $('.myratings').css('color', 'black'); $(".myratings").text("(" + sim + ")Review"); }
  });





  /////////////FAQ answer hide and show/////////////////////////////////////////

  $("#addsymbol").click(function () {
    if ($(this).val() == "+") {
      $("#FAQawnser").show();
      $(this).val("-");
    } else {
      $("#FAQawnser").hide();
      $(this).val("+");
    }
  });
});
