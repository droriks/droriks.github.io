/* Light/dark toggle. The page works without this file: it then just
   follows the system setting. The choice is remembered per browser. */
(function () {
  var root = document.documentElement;
  var button = document.getElementById("themeToggle");
  if (!button) return;

  function current() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  button.hidden = false;
  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
