let hasLicense = true;
let age = prompt('Enter your age: ');
let isDrink = false;

if (hasLicense === true && age >= 18 && isDrink === false) {
  console.log('You can drive a car');
} else {
  console.log('Sorry, you can not drive a car');
}