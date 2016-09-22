// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require stellar

$(window).scroll(function() {
  var value = $(this).scrollTop();
  if (value > 80)
    $(".navbar-inverse").css("background", "#111");
  else
    $(".navbar-inverse").css("background", "transparent");
});

// Stellar
$.stellar({
  horizontalOffset: 50,
  verticalOffset: 50,
  responsive: true
});
