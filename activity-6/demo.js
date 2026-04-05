console.log("=== FUNCTION DEMO ===");

function test1(msg) {
  return msg;
}

const test2 = function (msg) {
  return msg;
};

const test3 = (msg) => msg;

console.log(test1("hello"));
console.log(test2("hello"));
console.log(test3("hello"));

let globalVar = "global";

function scopeTest() {
  let localVar = "local";
  console.log(globalVar);
  console.log(localVar);
}

scopeTest();
