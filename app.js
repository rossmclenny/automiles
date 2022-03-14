document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
      var scrollDistance = window.scrollY;
      var viewportHeight = window.innerHeight;
      if (scrollDistance > viewportHeight) {
        document.getElementById("navbar").classList.remove("hide-logo");
      } else {
        document.getElementById("navbar").classList.add("hide-logo");
      }
    })
  });


