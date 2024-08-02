const postDirect = (href, postdirect, target) => {
  // check if the browser is an in-app browser
};

document.addEventListener("DOMContentLoaded", () => {
  // Reading all the anchor tags on page.
  document.querySelectorAll("a").forEach((a) => {
    if (!a.getAttribute("postdirect")) return;
    let href = a.getAttribute("href") || "#";
    let postdirect = a.getAttribute("postdirect");
    let target = a.getAttribute("target") || "_blank";

    a.setAttribute("href", "#");

    a.onclick = () => {
      postDirect(href, postdirect, target);
    };
  });
});
