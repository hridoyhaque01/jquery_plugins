wow = new WOW({
  animateClass: "animated",
  offset: 100,
});
wow.init();

var content = 1;

const container = document.querySelector(".wowContent");

document.getElementById("loadMore").onclick = function () {
  let div = `<div class="col-7 mb-4">
  <div class="single-content wow fadeInDown">new content ${content}</div>
  </div>`;
  container.insertAdjacentHTML("beforeend", div);
  content++;
};

// aso animation

AOS.init();
