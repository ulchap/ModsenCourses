const increaseNumbers = (arr) => {
  let increasedNumbers = [...arr];
  return increasedNumbers.map((n) => parseFloat((n * 1.1).toFixed(2)));
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, -10];
console.log(increaseNumbers(arr));
