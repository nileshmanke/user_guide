(() => {
  const slides = [...document.querySelectorAll(".slide")];
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");
  const progressFill = document.getElementById("progressFill");
  const progressDots = document.getElementById("progressDots");
  const stepLabel = document.getElementById("stepLabel");
  const stepCount = document.getElementById("stepCount");
  const footerTitle = document.getElementById("footerTitle");
  const restartTop = document.getElementById("restartTop");
  const finishRestart = document.getElementById("finishRestart");
  let current = 0;
  let busy = false;

  slides.forEach((_, i) => {
    const dot = document.createElement("i");
    if (i === 0) dot.classList.add("done");
    progressDots.appendChild(dot);
  });
  const dots = [...progressDots.children];

  function render() {
    const title = slides[current].dataset.title || "PROJECT GUIDE";
    stepLabel.textContent = title;
    footerTitle.textContent = title;
    stepCount.textContent = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    progressFill.style.width = `${((current + 1) / slides.length) * 100}%`;
    dots.forEach((dot, i) => dot.classList.toggle("done", i <= current));
    backBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;
    nextBtn.innerHTML = current === slides.length - 2 ? 'Finish <span>✦</span>' : 'Next <span>→</span>';
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  function goTo(next) {
    if (busy || next < 0 || next >= slides.length || next === current) return;
    busy = true;
    const old = slides[current];
    old.classList.remove("active");
    old.classList.add(next > current ? "exit-left" : "exit-right");
    window.setTimeout(() => {
      old.classList.remove("exit-left", "exit-right");
      current = next;
      slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
      render();
      busy = false;
    }, 190);
  }

  nextBtn.addEventListener("click", () => goTo(current + 1));
  backBtn.addEventListener("click", () => goTo(current - 1));
  document.querySelectorAll("[data-next]").forEach(btn => btn.addEventListener("click", () => goTo(current + 1)));
  function restart() { current = 0; slides.forEach((s, i) => s.classList.toggle("active", i === 0)); render(); }
  restartTop.addEventListener("click", restart);
  finishRestart.addEventListener("click", restart);
  document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight" || event.key === "PageDown") goTo(current + 1);
    if (event.key === "ArrowLeft" || event.key === "PageUp") goTo(current - 1);
    if (event.key === "Home") restart();
  });
  render();
})();