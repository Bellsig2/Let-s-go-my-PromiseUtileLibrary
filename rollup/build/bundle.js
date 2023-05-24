(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.PomiseOption = factory());
})(this, (function () { 'use strict';

  const fulfilledFirst$1 = new Promise((res, rej) => {
    setTimeout(res, 500, "fulfilledFirst");
  });

  const fulfilledSecond$1 = new Promise((res, rej) => {
    setTimeout(res, 300, "fulfilledSecond");
  });

  const fulfilledThird$1 = new Promise((res, rej) => {
    setTimeout(res, 100, "fulfilledThird");
  });

  const refusal$1 = new Promise((res, rej) => {
    rej(new Error("refusal"));
  });

  function PromiseAll(promises) {
    return new Promise((res, rej) => {
      const results = [];
      let count = 0;
      promises.forEach((data, index) => {
        data
          .then((value) => {
            results[index] = value;
            count++;
            if (count === promises.length) {
              res(results);
            }
          })
          .catch(rej);
      });
    });
  }

  const rollupPromiseAll = PromiseAll([
    fulfilledFirst$1,
    fulfilledSecond$1,
    fulfilledThird$1,
    refusal$1,
  ])
    .then((result) => {
      console.log("result", result);
    })
    .catch((error) => {
      console.log(error.message);
    });

  const fulfilledFirst = new Promise((res, rej) => {
    setTimeout(res, 100, "fulfilledFirst");
    //rej(new Error("refusal"));   AggregateError
  });

  const fulfilledSecond = new Promise((res, rej) => {
    setTimeout(res, 300, "fulfilledSecond");
    //rej(new Error("refusal"));   AggregateError
  });

  const fulfilledThird = new Promise((res, rej) => {
    setTimeout(res, 500, "fulfilledThird");
    //rej(new Error("refusal"));   AggregateError
  });

  const refusal = new Promise((res, rej) => {
    rej(new Error("refusal"));
  });
  //promise.any The characteristic is first result return
  //but when all results are reject return AggregateError
  const rollupPromiseAny = rollupPromiseAny([
    fulfilledFirst,
    fulfilledSecond,
    fulfilledThird,
    refusal,
  ])
    .then((result) => {
      console.log("result", result);
    })
    .catch((err) => {
      console.log(err.errors);
    });

  //The sequential function receives an array called promptFunctions as input.
  //The array must contain fromis generation functions.
  async function sequential(promiseFunctions) {
    for (const promiseFn of promiseFunctions) {
      //loop is used to cycle the elements of an array
      await promiseFn();
      //Wait for asynchronous processing with keywords
    }
  }

  //Promises performing asynchronous operations
  function createSequential(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`order: ${value}`);
        resolve();
      }, 100);
    });
  }

  const promises = [
    () => createSequential(1),
    () => createSequential(2),
    () => createSequential(3),
  ];

  const rollupSequential = sequential(promises);

  var rollupSequential$1 = { rollupSequential };

  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  function sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  function test() {
    console.log(year, "year");
    sleep(2000)
      .then(() => console.log(month, "month"))
      .then(() => console.log(date, "date"));
  }
  const rollupSleep = test();

  //Why sleep??
  //Adjusting the Asynchronous Operation Time
  //Debugging and testing

  var rollupSleep$1 = { rollupSleep };

  var main = {
    rollupPromiseAll,
    rollupPromiseAny,
    rollupSequential: rollupSequential$1,
    rollupSleep: rollupSleep$1,
  };

  return main;

}));
