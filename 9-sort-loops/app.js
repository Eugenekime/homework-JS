const arr = [-1, 40, -5, 10, -34, 24, -50, 90];

function sortArray() {
  let byPositive = [];
  let byNegative = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      byPositive.push(arr[i]);
    } else if (arr[i] < 0) {
      byNegative.push(arr[i]);
    }
  }

  for (let i = 0; i < byPositive.length; i++) {
    for (let j = i + 1; j < byPositive.length; j++) {
      if (byPositive[i] > byPositive[j]) {

        const temp = byPositive[i];
        byPositive[i] = byPositive[j];
        byPositive[j] = temp;
      }
    }
  }

  for (let i = 0; i < byNegative.length; i++) {
    for (let j = i - 1; j < byNegative.length; j++) {
      if (byNegative[i] > byNegative[j]) {

        const temp = byNegative[i];
        byNegative[i] = byNegative[j];
        byNegative[j] = temp;
      }
    }
  }

  console.log(`Positive numbers: ${byPositive}`);
  console.log(`Negative numbers: ${byNegative}`);

}

sortArray()


