/* ==============  Nav icon ================= */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector(".header__top-row");


navBtn.onclick = function () {
    navIcon.classList.toggle("nav-icon--active");
    nav.classList.toggle('header__top-row--mobile');
    // убираем вертикальный скролл
    document.body.classList.toggle(".no-scroll");
}


/* Phone Mask */
mask('[data-tel-input]');

// Удаляем '+', если больше ничего не введено, чтоы показать placeholder
const phoneInputs = document.querySelectorAll("[data-tel-input]");

phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    })

    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
})


/** ============ Google Maps ============ **/
// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position = { lat: 48.47077056987912, lng: 35.03542741100447 };
    // const position = { lat: -25.344, lng: 131.031 };
    // 48.456332074346854, 35.0722988052302; Днепр, ул.Дмитрия Донцова 8
    // проспект Дмитра Яворницького, 72б, Дніпро, Дніпропетровська область, 49000 (48.47077056987912, 35.03542741100447)
    // Dmytra Yavornytskoho Ave, 72б, Dnipro, Dnipropetrovs'ka oblast, 49000
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 17,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Dmytra Yavornytskoho Ave, 72б, Dnipro, Dnipropetrovs'ka oblast, 49000",
    });
}

initMap();



