"use strict";
const nElement = document.getElementById("n");
const mElement = document.getElementById("m");
const buttonElement = document.querySelector("button");
const pElement = document.querySelector("p");
//normal way
// const nums: number[] = [];
// const texts: string[] = [];
//generic way
const nums = [];
const texts = [];
function addnum(n, m) {
    if (typeof n === "number" && typeof m === "number") {
        return n + m;
    }
    else if (typeof n === "string" && typeof m === "string") {
        return n + " " + m;
    }
    return +n + +m;
}
function printResult(resultObj) {
    return resultObj.val;
}
// console.log("ok ===>", buttonElement);
buttonElement.addEventListener("click", () => {
    const n = nElement.value;
    const m = mElement.value;
    const result = addnum(+n, +m);
    const stringfiedResult = addnum(n, m);
    nums.push(result);
    texts.push(stringfiedResult);
    pElement.innerHTML = `${result}`;
    console.log(result);
    console.log(stringfiedResult);
    console.log(printResult({ val: result, timestamp: new Date() }));
    console.log("arrays =>", nums, texts);
    //   console.log(addnum(true, false));
});
// console.log(addnum(1, 2));
// console.log(addnum("1", "2"));
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it worked");
    }, 1000);
});
p.then((result) => {
    console.log(result.split(" "));
});
