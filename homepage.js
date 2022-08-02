var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    direction: getDirection(),
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
    observer: true,
    observeParents: true,
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

    return direction;
}
