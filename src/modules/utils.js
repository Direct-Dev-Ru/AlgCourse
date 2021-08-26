function measure(f) {
  let options = { count: 0, result: null, logging: false };
  console.log(`--------start of running ${f.name}----------`);
  var time = performance.now();
  // f function call
  console.log(`And the result is ....: ${f(options)}`);
  time = performance.now() - time;
  console.log(`Runnung time = ${time}`);
  console.log(`Runnung count = ${options.count}`);
  console.log(`--------end of runing ${f.name}----------`);
}
module.exports = { measure };
