
const ticker = document.getElementById('ticker');
const secondTicker = document.getElementById('secondTicker');
const text = ticker.innerText;
let index = 0;

function animateTicker() {
  ticker.innerText = text.substring(index) + text.substring(0, index);
  secondTicker.innerText = text.substring(index) + text.substring(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(animateTicker, 200);

// for carousel stages
let swiperStages = new Swiper(".stagesSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
  },
  navigation: {
    nextEl: ".stages-swiper-next",
    prevEl: ".stages-swiper-prev",
  },
});

// for carousel participants
let participantsSwiper = new Swiper(".participantsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  // rewind: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
