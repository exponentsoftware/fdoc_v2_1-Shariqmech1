const sumOfPrimes = (number) => {
  let answer = 0;
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      answer += i;
    }
  }
  return answer;
};

console.log(sumOfPrimes(20));
