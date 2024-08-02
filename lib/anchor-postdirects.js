const postDirect = (href, postdirect, target, wait) => {
  sessionStorage.setItem("postdirect", postdirect);

  if (target === "_blank") {
    window.open(href, target);
  } else {
    window.location.href = href;
  }

  setTimeout(() => {
    window.open(postdirect, "_self");
  }, wait);
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach((a) => {
    if (!a.getAttribute("postdirect")) return;
    let href = a.getAttribute("href") || "#";
    let postdirect = a.getAttribute("postdirect");
    let target = a.getAttribute("target") || "_blank";

    let wait = a.getAttribute("after");

    a.setAttribute("href", "#");

    a.onclick = () => {
      postDirect(href, postdirect, target, wait || 1000);
    };
  });

  const postdirect = sessionStorage.getItem("postdirect");

  if (postdirect) {
    window.location.href = postdirect;
    sessionStorage.removeItem("postdirect");
  }
});
