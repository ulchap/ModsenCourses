const delayedCallback = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

delayedCallback(() => {
  console.log("Функция вызвана");
});
