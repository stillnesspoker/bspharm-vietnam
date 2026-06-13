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

const navToggle = document.querySelector(".nav-toggle");
const siteHeader = document.querySelector(".site-header");

if (navToggle && siteHeader) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navToggle.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
  });

  siteHeader.querySelectorAll(".nav-side a").forEach((link) => {
    link.addEventListener("click", () => {
      siteHeader.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Mở menu");
    });
  });
}
