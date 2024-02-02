function filterArray(array, removeFunction) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (removeFunction(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

function removeEvenNumbers(number) {
  return number % 2 === 0;
}

function check(num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

const checkNumber = check(3);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = filterArray(numbers, removeEvenNumbers);

console.log(filteredArray);
console.log(checkNumber);

