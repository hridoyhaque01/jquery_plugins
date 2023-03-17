// counter three

var scrollNumber0 = new gScrollNumber(".scroll-number-0", {
  width: 60,
  color: "white",
  fontSize: 60,
  autoSizeContainerWidth: true,
});
var scrollNumber1 = new gScrollNumber(".scroll-number-1", {
  width: 60,
  color: "white",
  fontSize: 60,
  autoSizeContainerWidth: true,
});

var value0, value1;
value0 = 0;
value1 = 0;
setInterval(function () {
  scrollNumber0.run(value0++);
  scrollNumber1.run((value1 += 2));
}, 1000);

// couter four

setTimeout(function () {
  odometer.innerHTML = 456;
}, 1000);

$(window).ready(function () {
  // counter one

  $(".counter1").counterUp({
    delay: 10,
    time: 1200,
  });

  // counter two

  $(".svg-test").svgTimer({
    track: "rgb(56, 71, 83)",
    fill: "rgb(104, 214, 198)",
    transition: "linear",
  });
});
