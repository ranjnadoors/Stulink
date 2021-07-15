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
    value: 8,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount2").val("(" + ui.value + "/" + "10" + ")");
    }

  });
  $("#amount2").val("(8/10)");


  $("#slider-range-min-3").slider({
    range: "min",
    value: 8,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount3").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount3").val("(8/10)");

  $("#slider-range-min-4").slider({
    range: "min",
    value: 9,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount4").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount4").val("(9/10)");


  $("#slider-range-min-5").slider({
    range: "min",
    value: 7,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount5").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount5").val("(7/10)");






  $("#slider-range-min-6").slider({
    range: "min",
    value: 10,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount6").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount6").val("(10/10)");


  $("#slider-range-min-7").slider({
    range: "min",
    value: 9,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount7").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount7").val("(9/10)");


  $("#slider-range-min-8").slider({
    range: "min",
    value: 9,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount8").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount8").val("(9/10)");


  $("#slider-range-min-9").slider({
    range: "min",
    value: 7,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount9").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount9").val("(7/10)");

  $("#slider-range-min-10").slider({
    range: "min",
    value: 7,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount10").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount10").val("(7/10)");

  $("#slider-range-min-11").slider({
    range: "min",
    value: 7,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount11").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount11").val("(7/10)");

  $("#slider-range-min-12").slider({
    range: "min",
    value: 7,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount12").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount12").val("(7/10)");
  
  $("#slider-range-min-13").slider({
    range: "min",
    value: 7,
    min: 0,
    max: 10,
    slide: function (event, ui) {
      $("#amount13").val("(" + ui.value + "/" + "10" + ")");
    }
  });
  $("#amount13").val("(7/10)");



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
/*var sim = 0

  if (sim < 3) { $('.myratings').css('color', 'reblackd'); $(".myratings").text("(" + sim + ")Review"); } else { $('.myratings').css('color', 'black'); $(".myratings").text("(" + sim + ")Review"); }

  $("input[type='radio']").click(function () {
    var sim = $("input[type='radio']:checked").val();
    //alert(sim);
    if (sim < 3) { $('.myratings').css('color', 'black'); $(".myratings").text("(" + sim + ")Review"); } else { $('.myratings').css('color', 'black'); $(".myratings").text("(" + sim + ")Review"); }
  });*/





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

/*****************************************************Bootstarp collaspe***************************************/
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function(){
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
  
/***********************************view more or less courses************************ */
$(".cou-fee-toggle").hide();
$(".cou-fee-toggle-click").on('click', function(){
  $(".cou-fee-toggle").toggle(500); 
  $(".toggle-text-view").text($(".toggle-text-view").text() == 'View more courses' ? 'View less courses' : 'View more courses');
})
/************************************view more or less colleges**************************** */
$(".View-more-colleges-toggle").hide();
$(".View-more-colleges-click").on('click', function(e){
  e.preventDefault();
  $(".View-more-colleges-toggle").slideToggle('slow'); 

  $(".change-text").text($(".change-text").text() == 'View more colleges' ? 'View less colleges' : 'View more colleges');

  
})

$(".view-more-rating-toggle").hide();
$(".view-more-rating").on('click', function(e){
  e.preventDefault();
  $(".view-more-rating-toggle").slideToggle('slow'); 

  $(".view-change-text").text($(".view-change-text").text() == 'View more' ? 'View less' : 'View more');

  
})

$(".text-review-toggle").hide();
$(".text-review-more").on('click', function(e){
  e.preventDefault();
  $(".text-review-toggle").slideToggle('slow'); 

  $(".view-more-change-review").text($(".view-more-change-review").text() == 'View more Review' ? 'View less Review' : 'View more Review');

  
})


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmore-less");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }

  
}
function myFunction1() {
  var dots = document.getElementById("dots-1");
  var moreText = document.getElementById("read-more-1");
  var btnText = document.getElementById("readmore-less-1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }

  
}
function myFunction2() {
  var dots = document.getElementById("dots-2");
  var moreText = document.getElementById("read-more-2");
  var btnText = document.getElementById("readmore-less-2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }

  
}
function myFunction3() {
  var dots = document.getElementById("dots-3");
  var moreText = document.getElementById("read-more-3");
  var btnText = document.getElementById("readmore-less-3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }

  
}
function myFunction4() {
  var dots = document.getElementById("dots-4");
  var moreText = document.getElementById("read-more-4");
  var btnText = document.getElementById("readmore-less-4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }

  
}
function myFunction5() {
  var dots = document.getElementById("dots-5");
  var moreText = document.getElementById("read-more-5");
  var btnText = document.getElementById("readmore-less-5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }

  
}
function myFunction6() {
  var dots = document.getElementById("dots-6");
  var moreText = document.getElementById("read-more-6");
  var btnText = document.getElementById("readmore-less-6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }

  
}




