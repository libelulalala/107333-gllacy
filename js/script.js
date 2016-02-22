// Открытие-закрытие модального окна
// Переменные
var link = document.querySelector(".btn--popup-show");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup__btn-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name='username']");
var email = popup.querySelector("[name='email']");
var storage = localStorage.getItem("username");

// Открываем модальное окно
link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-show");
    if (storage) {
      username.value = storage;
      email.focus();
    } else {
      username.focus();
    }
});

// Закрываем модальное окно
close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-show");
});
window.addEventListener("keydown", function(event) {
if (event.keyCode == 27) {
          if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
          }
        }
});


// Интерактивная карта
(function () {
ymaps.ready(init);
var myMap;
function init() {
    myMap = new ymaps.Map('y-map', {
        center: [59.93931, 30.326311],
        zoom: [17],
        controls: []
    }),

    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');
    myPlacemark = new ymaps.Placemark([59.939157, 30.320857], {
        hintContent: 'Большая Конюшенная улица, 19/8, Санкт-Петербург, Россия',
        balloonContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin.png',
        iconImageSize: [218, 142],
        iconImageOffset: [160, -100]
    });

    myMap.geoObjects.add(myPlacemark);
}
})();
