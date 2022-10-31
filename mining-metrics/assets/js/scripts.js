AOS.init({
  duration: 1800,
  once: true,
});

var swiper = new Swiper(".clientes", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".slider-bottom", {
  slidesPerView: 1,
  effect: "fade",
});

function entrar() {
  document.querySelector("#login1").classList.add("--visible");
  document.querySelector("#overlaybg").classList.add("--visible");
}

function openMobileLogin() {
  document.querySelector("#login-mobile").classList.add("--visible");
}
function openMobileMenu() {
  document.querySelector("#menu-mobile").classList.add("--visible");
}

function start(plan) {
  document.querySelector("#cadastro").classList.add("--visible");
  document.querySelector("#overlaybg").classList.add("--visible");
  if (plan) {
    document.querySelector("#tipo-de-plano").value = plan;
    document.querySelector("#span-plano").innerText = plan;
  }
}

function prices() {
  var x = document.querySelectorAll(".--mensal, .--anual");
  x.forEach(function (e) {
    e.classList.toggle("--visible");
  });
}

function closeAll() {
  document.querySelector("#login1").classList.remove("--visible");
  document.querySelector("#overlaybg").classList.remove("--visible");
  document.querySelector("#cadastro").classList.remove("--visible");
  document.querySelector("#login-mobile").classList.remove("--visible");
  document.querySelector("#menu-mobile").classList.remove("--visible");
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    closeAll();
  }
});
