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
    // Styles a map in night mode.
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.47077056987912, lng: 35.03542741100447 },
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
}

window.initMap = initMap;




/** ============ Google Maps ============ **/
// Initialize and add the map
let map;

// async function initMap() {
//     // The location of Uluru
//     const position = { lat: 48.47077056987912, lng: 35.03542741100447 };
//     // const position = { lat: -25.344, lng: 131.031 };
//     // 48.456332074346854, 35.0722988052302; Днепр, ул.Дмитрия Донцова 8
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
//                         color: "#242f3e",
//                     },
//                 ],
//             },
//             {
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#746855",
//                     },
//                 ],
//             },
//             {
//                 elementType: "labels.text.stroke",
//                 stylers: [
//                     {
//                         color: "#242f3e",
//                     },
//                 ],
//             },
//             {
//                 featureType: "administrative.locality",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#d59563",
//                     },
//                 ],
//             },
//             {
//                 featureType: "poi",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#d59563",
//                     },
//                 ],
//             },
//             {
//                 featureType: "poi.park",
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#263c3f",
//                     },
//                 ],
//             },
//             {
//                 featureType: "poi.park",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#6b9a76",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road",
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#38414e",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road",
//                 elementType: "geometry.stroke",
//                 stylers: [
//                     {
//                         color: "#212a37",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#9ca5b3",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road.highway",
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#746855",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road.highway",
//                 elementType: "geometry.stroke",
//                 stylers: [
//                     {
//                         color: "#1f2835",
//                     },
//                 ],
//             },
//             {
//                 featureType: "road.highway",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#f3d19c",
//                     },
//                 ],
//             },
//             {
//                 featureType: "transit",
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#2f3948",
//                     },
//                 ],
//             },
//             {
//                 featureType: "transit.station",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#d59563",
//                     },
//                 ],
//             },
//             {
//                 featureType: "water",
//                 elementType: "geometry",
//                 stylers: [
//                     {
//                         color: "#17263c",
//                     },
//                 ],
//             },
//             {
//                 featureType: "water",
//                 elementType: "labels.text.fill",
//                 stylers: [
//                     {
//                         color: "#515c6d",
//                     },
//                 ],
//             },
//             {
//                 featureType: "water",
//                 elementType: "labels.text.stroke",
//                 stylers: [
//                     {
//                         color: "#17263c",
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

// window.initMap = initMap;
// initMap();



