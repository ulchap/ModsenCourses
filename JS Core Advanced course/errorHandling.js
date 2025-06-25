const isInt = (value) => {
  if (!Number.isInteger(value)) {
    throw new Error("This value is not integer");
  }
  console.log("Value is integer");
};

try {
  const a = 4;
  const b = 3.5;

  isInt(a);
  isInt(b);
} catch (e) {
  console.error(e.message);
}
