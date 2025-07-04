let addressLat = 10 * (Math.PI/180);
let addressLong = 20 * (Math.PI/180);
let positionLat = 30 * (Math.PI/180);
let positionLong = 40 * (Math.PI/180);

let dLat = addressLat - positionLat;
let dLon = addressLong - positionLong;

let a = Math.sin(dLat/2)**2 + Math.cos(positionLat) * Math.cos(addressLat) * Math.sin(dLon/2)**2

let c = 2 * Math.asin(Math.sqrt(a));
let R = 6371; // Радиус Земли в километрах
let result = R * c;

console.log(result);