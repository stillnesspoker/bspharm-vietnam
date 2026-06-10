const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const nextSrc = thumb.dataset.src;
    if (!nextSrc || !mainImage) {
      return;
    }
    mainImage.src = nextSrc;
    thumbs.forEach((item) => item.classList.remove("is-active"));
    thumb.classList.add("is-active");
  });
});

const accordions = document.querySelectorAll(".accordion-list details");

accordions.forEach((node) => {
  node.addEventListener("toggle", () => {
    if (!node.open) {
      return;
    }
    accordions.forEach((other) => {
      if (other !== node) {
        other.open = false;
      }
    });
  });
});
