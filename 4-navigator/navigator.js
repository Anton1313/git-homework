let addressLat = 10 * (Math.PI/180);
let addressLong = 20 * (Math.PI/180);
let positionLat = 30 * (Math.PI/180);
let positionLong = 40 * (Math.PI/180);

let dLat = ((positionLat - addressLat)/2);
let dLon = ((positionLong - addressLong)/2);

let a = Math.sin(dLat)**2 + Math.cos(addressLat) * Math.cos(positionLat) * Math.sin(dLon) **2

let c = 2 * Math.asin(Math.sqrt(a));
let R = 6371; // Радиус Земли в километрах
let result = R * c;

console.log(result);