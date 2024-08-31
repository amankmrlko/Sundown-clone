// locomotive scroll

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//menu popup animation

var menu = document.querySelector("#menu-div");
var fixed = document.querySelector("#poppedup");
menu.addEventListener("mouseenter", () => {
  fixed.style.display = "block";
});
menu.addEventListener("mouseleave", () => {
  fixed.style.display = "none";
});

//assigning source to the animation div

var vid = document.querySelector("#menuvid");

document.querySelectorAll(".animatedMenu").forEach((e) => {
  e.addEventListener("mouseenter", () => {
    let src = e.getAttribute("data-src");
    let idx = src.length - 1;
    let pos = src.charAt(idx);

    if (pos === "4") {
      fixed.style.backgroundImage = "none";
      vid.setAttribute("src", src);
    } else if (pos === "p") {
      vid.setAttribute("src", "");
      fixed.style.backgroundImage = `url(${src})`;
    }
  });
});

// options select balckdiv
var design = document.querySelector("#design");
var project = document.querySelector("#project");
var execution = document.querySelector("#execution");
var image = document.querySelector("#optionimg");
var para = document.querySelector("#para");

design.style.color = "#ffffffec";
design.style.borderLeft = "5px solid #fe330a";

let img = design.getAttribute("data-src");
image.setAttribute("src", img);
image.classList.add("transition");

let p = design.getAttribute("data-para");
para.textContent = p;
para.classList.add("transition");
setTimeout(() => {
  image.classList.remove("transition");
  para.classList.remove("transition");
}, 400);

document.querySelectorAll(".dataclick").forEach((item) => {
  item.addEventListener("click", () => {
    design.style.color = "#504a45";
    design.style.borderLeft = "5px solid #504a45";

    project.style.color = "#504a45";
    project.style.borderLeft = "5px solid #504a45";

    execution.style.color = "#504a45";
    execution.style.borderLeft = "5px solid #504a45";

    item.style.color = "#ffffffec";
    item.style.borderLeft = "5px solid #fe330a";

    let img = item.getAttribute("data-src");
    image.setAttribute("src", img);
    image.classList.add("transition");

    let p = item.getAttribute("data-para");
    para.textContent = p;
    para.classList.add("transition");

    setTimeout(() => {
      image.classList.remove("transition");
      para.classList.remove("transition");
    }, 400);
  });
});

// swipper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});

// cursor

var swipe = document.querySelector(".swiper");
var cursor = document.querySelector("#cursor");
var page = document.querySelector("body");

// Function to center the cursor
function updateCursorPosition(details) {
  let cursorWidth = cursor.offsetWidth;
  let cursorHeight = cursor.offsetHeight;

  cursor.style.top = details.clientY - cursorHeight / 2 + "px";
  cursor.style.left = details.clientX - cursorWidth / 2 + "px";
}

swipe.addEventListener("mouseenter", () => {
  cursor.style.transform = "scale(1)";
  swipe.style.cursor = "none";
});

swipe.addEventListener("mouseleave", () => {
  cursor.classList.add("cursorexit");

  setTimeout(() => {
    cursor.classList.remove("cursorexit");
  }, 200);
  cursor.style.transform = "scale(0)";
  swipe.style.cursor = "auto";
});

page.addEventListener("mousemove", updateCursorPosition);

page.addEventListener("mousedown", updateCursorPosition);
page.addEventListener("mouseup", updateCursorPosition);

var loader = document.querySelector("#loader");

setTimeout(() => {
  loader.style.transform = "translateY(-100%)";
}, 4000);
