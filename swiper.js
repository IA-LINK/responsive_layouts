<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="hero1.jpg" alt="Campus view"></div>
    <div class="swiper-slide"><img src="hero2.jpg" alt="College Logo"></div>
    <div class="swiper-slide"><img src="hero3.jpg" alt="Students"></div>
  </div>
  <div class="swiper-pagination"></div>
</div>

const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: { delay: 5000 },
  pagination: { el: '.swiper-pagination' },
});
