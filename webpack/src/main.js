import PromiseAllBundle from "../../PromiseOption/src/Promise.All";
import PromiseAnyBundle from "../../PromiseOption/src/Promise.Any";
import SequentialBundle from "../../PromiseOption/src/Promise.sequential";
import SleepBundle from "../../PromiseOption/src/Sleep";

const PromiseAll = document.querySelector("#webpack_promiseAll");
const PromiseAny = document.querySelector("#webpack_promiseAny");
const PromiseSequential = document.querySelector("#webpack_Sequential");
const sleep = document.querySelector("#webpack_sleep");

PromiseAll.addEventListener("click", function () {
  console.log(PromiseAllBundle);
});
PromiseAny.addEventListener("click", PromiseAnyBundle);
PromiseSequential.addEventListener("click", SequentialBundle);
sleep.addEventListener("click", SleepBundle);
