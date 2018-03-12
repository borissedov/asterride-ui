

$(function () {
  var ddlData = [
    {
      text: "Executive Sedan",
      value: 1,
      description: "3 passengers, 3 bags",
      imageSrc: "img/executive-sedan.png"
    },
    {
      text: "SUV",
      value: 2,
      description: "6 passengers, 6 bags",
      imageSrc: "img/SUV.png"
    },
    {
      text: "Shared Ride Van",
      value: 3,
      description: "7-14 passengers, 7-10 bags",
      imageSrc: "img/asterride-white-van.png"
    },
    {
      text: "Private Van",
      value: 4,
      description: "7-14 passengers, 7-10 bags",
      imageSrc: "img/asterride-white-van.png"
    },
    {
      text: "Limousine",
      value: 5,
      description: "10 passengers, 6 bags",
      imageSrc: "img/limousine.png"
    },
    {
      text: "Sprinter",
      value: 6,
      description: "14 passengers, 14 bags",
      imageSrc: "img/asterride-mercedes-sprinter.png"
    },
    {
      text: "Coach or Bus",
      value: 7,
      description: "up to 58 passengers",
      imageSrc: "img/04.png"
    },

  ];
  $('#vehicleData').ddslick({
    data: ddlData,
    width: 300,
    imagePosition: "left",
    onSelected: function (selectedData) {
      //Write your logic on Selection index change.                      
    }
  });
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Responsive toggle menu
$('.menu-toggle').click(function () {
  $('.nav-bar').toggleClass('top-nav-open');
})

$(function () {
  $('#datetimepicker1').datetimepicker();

  $('#datetimepicker2').datetimepicker({
    format: 'DD/MM/YYYY'
  });

  $('#timepicker').datetimepicker({
    format: 'LT'
  });

});
 


$('.home-bottom-slider').bxSlider({
  mode: 'fade',
  auto: true,
  adaptiveHeight: true,
});

$('.corporate-testmonial-slider').bxSlider({
  auto: true,
  adaptiveHeight: true,
});




//View port animation
var $animation_elements = $('.animated');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
    // else {
    //     $element.removeClass('in-view');
    // }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');



// Smooth scrollbar 
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });

// $('#datepicker').datepicker({
//     uiLibrary: 'bootstrap4'
// });