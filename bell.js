/**
 * bell.js — practice answer timers (7/10/15)
 */
(function () {
  var handle = null;
  var left = 0;
  var display = document.getElementById("display");
  var status = document.getElementById("status");

  function fmt(s) {
    var m = Math.floor(s / 60), r = s % 60;
    return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r;
  }

  function paint() {
    display.textContent = fmt(left);
  }

  function done() {
    status.textContent = "TIME. Underline keywords. Move on.";
    document.body.style.background = "#ffe0e0";
  }

  function start(mins) {
    clearInterval(handle);
    left = mins * 60;
    status.textContent = "Writing…";
    document.body.style.background = "";
    paint();
    handle = setInterval(function () {
      left -= 1;
      if (left <= 0) {
        left = 0;
        paint();
        clearInterval(handle);
        done();
      } else paint();
    }, 1000);
  }

  document.querySelectorAll(".presets button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      start(parseInt(btn.getAttribute("data-m"), 10));
    });
  });
  document.getElementById("stop").onclick = function () {
    clearInterval(handle);
    status.textContent = "Stopped";
  };
  paint();
})();
