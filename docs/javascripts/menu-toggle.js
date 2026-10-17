/* Ավելացնում է «☰ Մենյու» կոճակը վերևի շարքում՝ ձախ մենյուն բացելու/փակելու համար */
function addMenuToggle() {
  if (document.querySelector(".menu-toggle")) return;
  var inner = document.querySelector(".md-header__inner");
  var title = document.querySelector(".md-header__title");
  if (!inner || !title) return;

  var btn = document.createElement("button");
  btn.className = "menu-toggle";
  btn.type = "button";
  btn.setAttribute("aria-expanded", document.body.classList.contains("nav-open") ? "true" : "false");
  btn.textContent = "☰ Մենյու";
  btn.addEventListener("click", function () {
    var open = document.body.classList.toggle("nav-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  inner.insertBefore(btn, title);
}

if (typeof document$ !== "undefined") {
  document$.subscribe(addMenuToggle);
} else {
  document.addEventListener("DOMContentLoaded", addMenuToggle);
}
