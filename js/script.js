
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
