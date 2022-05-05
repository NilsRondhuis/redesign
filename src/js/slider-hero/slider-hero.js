import Swiper, {Autoplay} from "swiper";
Swiper.use([Autoplay])

const swiper = new Swiper('.swiper', {
    simulateTouch: true,
    grabCursor: true,
    spaceBetween: 15,
    loop: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: true,
    // },
    speed: 1000,
});