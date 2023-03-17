const container = document.querySelector(".contents");
const mixer1 = mixitup(container, {
  selectors: {
    target: ".mix",
    control: ".filter-btn",
  },
});
