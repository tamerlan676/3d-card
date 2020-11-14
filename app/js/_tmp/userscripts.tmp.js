"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Custom JS
  var body = document.querySelector('body');
  cx = window.innerWidth / 2;
  cy = window.innerHeight / 2;
  body.addEventListener('mousemove', function (e) {
    clientX = e.pageX;
    clientY = e.pageY; // console.log(e.pageX + '/' +e.pageY)

    request = requestAnimationFrame(updateMe);
  });

  function updateMe() {
    dx = clientX - cx;
    dy = clientY - cy;
    titlx = dy / cy;
    titly = dx / cx;
    radius = Math.sqrt(Math.pow(titlx, 2) + Math.pow(titly, 2));
    degree = radius * 12;
    gsap.to('.content', 1, {
      transform: "rotate3d( ".concat(titlx, ", ").concat(titly, ", 0, ").concat(degree, "deg )")
    });
  }
});