const arr = [3, 1, 7, 4, 5];

function findNthLargest(arr, number) {
  let filterArr = arr.filter((el) => el > number).sort();
  console.log(filterArr[0]);
}

findNthLargest(arr, 3);
