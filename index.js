var character = "theif";
var myNumber = 30;
var isMarried = false;
// typescript does not allow change of datatype once it is assigned
// character=50
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(6));
// explicit type
var boy;
boy = "lota";
var num;
num = 67;
var isSingle;
isSingle = false;
// array
//inticializing the array to be empty
var classMate = [];
classMate = ["food"];
console.log(classMate);
//union types
var schoolMate = [];
schoolMate.push("chizoba");
schoolMate.push(90);
schoolMate.push(false);
schoolMate.push("chinedu", true, 89);
console.log(schoolMate);
//objects
var stack;
stack = { name: "lota", numb: 56 };
console.log(stack);
var frontend;
frontend = { names: "chinedu" };
console.log(frontend);
//any is used when declaring a variable that can have value of any data type
var job;
job = 20;
console.log(job);
job = false;
console.log(job);
job = 'laundry';
console.log(job);
//functions
var myFunction;
myFunction = function () {
    console.log("my name is paschal");
};
var theFunction = function (name, age, isEmployed) {
    console.log("my name is ".concat(name, ",i am ").concat(age, "."));
    console.log("employmentStatus:".concat(isEmployed));
};
theFunction("paschal", 29, true);
// optional parameters
myFunction = function (name, age, isEmployed) {
    console.log("my name is ".concat(name, ",i am ").concat(age, "."));
    console.log("employmentStatus:".concat(isEmployed));
};
myFunction("paschal", 29);
// default value
myFunction = function (name, age, isEmployed) {
    if (isEmployed === void 0) { isEmployed = "yes"; }
    console.log("my name is ".concat(name, ",i am ").concat(age, "."));
    console.log("employmentStatus:".concat(isEmployed));
};
myFunction("paschal", 29);
//void is complete lack of value
var theFunctions = function (a, b) {
    return a + b;
};
var result = theFunctions(3, 7);
console.log(result);
var anotherFunction = function (user) {
    console.log(user);
};
var greetFunction = function (user) {
    console.log(user);
};
var date = new Date;
var todaysDate = date.toTimeString();
console.log(todaysDate);
var greetUser = function () {
};
