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
function initMap() {
    const position = { lat: 48.470777683115294, lng: 35.0354274111957 };
    // Styles a map in night mode.
    const map = new google.maps.Map(document.getElementById("map"), {
        center: position,
        zoom: 17,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#242f3e" }],
            },
            {
                elementType: "labels.text.fill",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ],
    });

    // const marker = new AdvancedMarkerView({
    new google.maps.Marker({
        map: map,
        position: position,
        animation: google.maps.Animation.DROP,
        title: "Dmytra Yavornytskoho Ave, 72б",
    });
}

// window.initMap = initMap;

/** ============ Google Maps ============ **/
// Initialize and add the map
let map;

// async function initMap() {
//     // The location of Uluru
//     const position = { lat: 48.470777683115294, lng: 35.0354274111957 };
//     // 48.470777683115294, 35.0354274111957
//     // const position = { lat: -25.344, lng: 131.031 };
//     // проспект Дмитра Яворницького, 72б, Дніпро, Дніпропетровська область, 49000 (48.47077056987912, 35.03542741100447)
//     // Dmytra Yavornytskoho Ave, 72б, Dnipro, Dnipropetrovs'ka oblast, 49000
//     // Request needed libraries.
//     //@ts-ignore
//     const { Map } = await google.maps.importLibrary("maps");
//     const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

//     // The map, centered at Dmytra Yavornytskoho Ave, 72б
//     // Styles a map in night mode.
//     map = new Map(document.getElementById("map"), {
//         zoom: 17,
//         center: position,
//         mapId: "DEMO_MAP_ID",
//         styles: [
//             {
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#1d2c4d",
//                     },
//                 ],
//             },
//             {
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#8ec3b9",
//                     },
//                 ],
//             },
//             {
//                 elementType: "labels.text.stroke",
//                 stylers: [
//                     {
//                         color: "#1a3646",
//                     },
//                 ],
//             },
//             {
//                 featureType: "administrative.country",
//                 elementType: "geometry.stroke",
//                 stylers: [
//                     {
//                         color: "#4b6878",
//                     },
//                 ],
//             },
//             {
//                 featureType: "administrative.land_parcel",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#64779e",
//                     },
//                 ],
//             },
//             {
//                 featureType: "administrative.province",
//                 elementType: "geometry.stroke",
//                 stylers: [
//                     {
//                         color: "#4b6878",
//                     },
//                 ],
//             },
//             {
//                 featureType: "landscape.man_made",
//                 elementType: "geometry.stroke",
//                 stylers: [
//                     {
//                         color: "#334e87",
//                     },
//                 ],
//             },
//             {
//                 featureType: "landscape.natural",
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#023e58",
//                     },
//                 ],
//             },
//             {
//                 featureType: "poi",
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#283d6a",
//                     },
//                 ],
//             },
//             {
//                 featureType: "poi",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#6f9ba5",
//                     },
//                 ],
//             },
//             {
//                 featureType: "poi",
//                 elementType: "labels.text.stroke",
//                 stylers: [
//                     {
//                         color: "#1d2c4d",
//                     },
//                 ],
//             },
//             {
//                 featureType: "poi.park",
//                 elementType: "geometry.fill",
//                 stylers: [
//                     {
//                         color: "#023e58",
//                     },
//                 ],
//             },
//             {
//                 featureType: "poi.park",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#3C7680",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road",
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#304a7d",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#98a5be",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road",
//                 elementType: "labels.text.stroke",
//                 stylers: [
//                     {
//                         color: "#1d2c4d",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road.highway",
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#2c6675",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road.highway",
//                 elementType: "geometry.stroke",
//                 stylers: [
//                     {
//                         color: "#255763",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road.highway",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#b0d5ce",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road.highway",
//                 elementType: "labels.text.stroke",
//                 stylers: [
//                     {
//                         color: "#023e58",
//                     },
//                 ],
//             },
//             {
//                 featureType: "transit",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#98a5be",
//                     },
//                 ],
//             },
//             {
//                 featureType: "transit",
//                 elementType: "labels.text.stroke",
//                 stylers: [
//                     {
//                         color: "#1d2c4d",
//                     },
//                 ],
//             },
//             {
//                 featureType: "transit.line",
//                 elementType: "geometry.fill",
//                 stylers: [
//                     {
//                         color: "#283d6a",
//                     },
//                 ],
//             },
//             {
//                 featureType: "transit.station",
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#3a4762",
//                     },
//                 ],
//             },
//             {
//                 featureType: "water",
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#0e1626",
//                     },
//                 ],
//             },
//             {
//                 featureType: "water",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#4e6d70",
//                     },
//                 ],
//             },
//         ],
//     });

//     // The marker, positioned at Dmytra Yavornytskoho Ave, 72б
//     const marker = new AdvancedMarkerView({
//         map: map,
//         position: position,
//         title: "Dmytra Yavornytskoho Ave, 72б, Dnipro, Dnipropetrovs'ka oblast, 49000",
//     });
// }

window.initMap = initMap;
// initMap();



