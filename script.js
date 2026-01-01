window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
