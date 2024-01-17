const addressLat = 67;
const addressLong = 23;
const positionLat = 51;
const positionLong = 96;

const distance = Math.sqrt((addressLat - positionLat) ** 2 + (positionLong - addressLong) ** 2);

console.log(distance);