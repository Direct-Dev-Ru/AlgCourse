function measure(f) {
  console.log(`--------start ${f.name}----------`);
  var time = performance.now();
  // некий код
  console.log(`And the result is ....: ${f()}`);
  time = performance.now() - time;
  console.log(`Runnung time = ${time}`);
  console.log(`--------start ${f.name}----------`);
}
module.exports = { measure };
