const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// total of array = 55
let sum = 0;
let missingnumber;
const findMissingNumber = (arr) => {
  let total = ((arr.length + 1) * (arr.length + 2)) / 2;
  for (let i = 0; i <= arr.length; i++) {
    sum += arr[i];
    // console.log(sum);
    missingnumber = total - sum;
    console.log(missingnumber);
  }
};

console.log(findMissingNumber(arr));
