const fs = require("fs");
const kidif = require("kidif");
// const lodash = require("lodash");
const chrisUtil = require("./util/chris_util")

const myJsonFiles = kidif("*.json");

// console.log(myJsonFiles);
chrisUtil.sayHello()
console.log(chrisUtil.add(3, 5))
