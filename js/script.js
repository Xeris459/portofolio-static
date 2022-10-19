function scroll(e) {}

let elem = document.querySelectorAll(".item");
document.querySelector(".brand").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(".active").classList.remove("active");
  elem[0].classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

for (let index = 0; index < elem.length; index++) {
  elem[index].addEventListener("click", function (e) {
    e.preventDefault();
    var scrollDiv = document.querySelector(
      elem[index].getAttribute("href")
    ).offsetTop;

    window.scrollTo({ top: scrollDiv - 100, behavior: "smooth" });

    document.querySelector(".active").classList.remove("active");
    elem[index].classList.add("active");
  });
}
