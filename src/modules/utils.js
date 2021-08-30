function measure(f) {
  let options = { count: 0, result: null, logging: false };
  console.log(`--------start of running ${f.name}----------`);
  var time = performance.now();
  // f function call
  console.log(`And the result is ....: ${f(options)}`);
  console.log(options?.memo ?? "no memo");
  time = performance.now() - time;
  console.log(`Runnung time = ${time}`);
  console.log(`Runnung count = ${options.count}`);
  console.log(`--------end of runing ${f.name}----------`);
}

function getNumMockData(itemsCount = 100, maxValue) {
  if (!maxValue) maxValue = itemsCount;
  return Array.from({ length: itemsCount }, () =>
    Math.floor(Math.random() * maxValue)
  );
}

module.exports = { measure, getNumMockData };
