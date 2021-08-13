function measure(f) {
  console.log("--------start----------");
  var time = performance.now();
  // некий код
  console.log(f());
  time = performance.now() - time;
  console.log("Время выполнения = ", time);
  console.log("--------finish----------");
}

module.exports = { measure };
