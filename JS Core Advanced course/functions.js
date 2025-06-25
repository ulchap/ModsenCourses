const repeatOperations = (op, interval = 1000, repeat = 5) => {
  let count = 0;
  const timerId = setInterval(() => {
    if (count < repeat) {
      op();
      count++;
    } else {
      clearInterval(timerId);
    }
  }, interval);
};

repeatOperations(() => {
  console.log("Выполняется операция");
});
