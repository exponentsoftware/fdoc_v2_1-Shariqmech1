const arr = [3, 4, 6, 8, 1, 2, 9];
let pairs = [];
const findPairs = (arr, number) => {
  for (i = 0; i <= arr.length; i++) {
    for (j = 0; j <= arr.length; j++) {
      if (arr[i] + arr[j] === number) {
        pairs.push(arr[i], arr[j]);
      }
    }
  }
  return pairs;
};

console.log(findPairs(arr, 10));
