const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maximum = -Infinity;
let newArr = [];

function findMaximumSubarray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  console.log(sum);
  return newArr.push(sum);
}
console.log("newArr" + newArr);

findMaximumSubarray(arr);
