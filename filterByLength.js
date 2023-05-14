const arr = ["apple", "banana", "cherry", "date", "elderberry"];

// Write a function called `filterByLength` that takes an array of strings and a number as input and returns an array of all the strings in the input array whose length is greater than or equal to the input number.

const filterByLength = (arr, number) => {
  let NewArray = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i].length >= number) {
      NewArray.push(arr[i]);
    }
  }
  return NewArray;
};

console.log(filterByLength(arr, 6));
