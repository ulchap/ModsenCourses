function runAsyncFunctions(asyncFunctions) {
  return asyncFunctions.reduce((promiseChain, currentFunction) => {
    return promiseChain.then((result) => currentFunction(result));
  }, Promise.resolve());
}
function delayLog(msg, delay) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(msg);
        resolve(msg);
      }, delay);
    });
}

runAsyncFunctions([
  delayLog("Первое действие", 1000),
  delayLog("Второе действие", 1000),
  delayLog("Третье действие", 1000),
]).then(() => {
  console.log("Все действия выполнены");
});
