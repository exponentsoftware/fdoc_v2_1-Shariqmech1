// first approch for one targated number of an array

const arr = [4, 2, 6, 8, 4, 1, 4];

// set a variable with counter number =0
let countOccrance = 0;
// first we have to choose a number which gonna be targated
let target = 4;
// create a for loop for checking the value of array
for (Number of arr) {
  // put a condition that will compair the number with targeted value
  if (Number == target) {
    countOccrance++;
  }
}

console.log(countOccrance);

// second approach for any number of an array
const array = [4, 2, 6, 8, 4, 1, 4];
const countOccrances = (array, item) => {
  let counter = 0;
  for (number of array) {
    if (number == item) {
      counter++;
    }
  }
  console.log(counter);
};

countOccrances(array, 4);
