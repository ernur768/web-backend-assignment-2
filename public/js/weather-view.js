var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([51.505, -0.09]).addTo(map);

// const form = document.querySelector('form');
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//
//     const { city } = Object.fromEntries(new FormData(form).entries());
// })