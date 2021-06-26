  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("menu-prin");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset == 0) {
      $(".primero").css( "visibility", "visible");
      $(".segundo").css( "visibility", "hidden");
    } else {
      $(".segundo").css( "visibility", "visible");
      $(".primero").css( "visibility", "hidden");
    }
  }

  document.getElementById("menu-secu").addEventListener("click", function( event ) {
    $(".section-menu.open").css( "visibility", "visible");
  }, false);

  document.getElementById("nav-close-inner").addEventListener("click", function( event ) {
    $(".section-menu.open").css( "visibility", "hidden");
  }, false);
