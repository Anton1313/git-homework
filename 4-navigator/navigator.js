let addressLat = 10 * (Math.PI/180);
let addressLong = 20 * (Math.PI/180);
let positionLat = 30 * (Math.PI/180);
let positionLong = 40 * (Math.PI/180);

let a = Math.sin((addressLat-positionLat)/2)**2 + Math.cos(positionLat) * Math.cos(addressLat) * Math.sin(addressLong-positionLong)**2
let result = 2 * 6371 * Math.asin(a**(1/2))