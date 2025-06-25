const task = () => {
  if (true) {
    var x1 = 1;
    let x2 = 2;
    const x3 = 3;

    console.log(x1, x2, x3);
  }
  console.log(x1);
  console.log(x2);
  console.log(x3);
};

task();

/*
Внутри блока кода видны все переменные, а вне блока видна только переменная, объявленная с помощью
ключевого слова var.
 */
