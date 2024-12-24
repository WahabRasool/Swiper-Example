var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: -12,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  const calculateHeight = () => {
    const swiperSlideElements = Array.from(document.querySelectorAll('.swiper .swiper-slide'))
    if (!swiperSlideElements.length) return
    const width = swiperSlideElements[0].getBoundingClientRect().width
    const height = Math.round(width / (16 / 9))
    swiperSlideElements.map(element => element.style.height = `${height}px`)
  }
  
  document.addEventListener("DOMContentLoaded", calculateHeight)