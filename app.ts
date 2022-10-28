const nElement = document.getElementById("n") as HTMLInputElement;
const mElement = document.getElementById("m") as HTMLInputElement;
const buttonElement = document.querySelector("button") as HTMLButtonElement;
const pElement = document.querySelector("p")!;

//normal way
// const nums: number[] = [];
// const texts: string[] = [];

//generic way
const nums: Array<number> = [];
const texts: Array<string> = [];

type NumorStr = number | string;
type Result = { val: number; timestamp: Date };
interface ResultObj {
  val: number;
  timestamp: Date;
}

function addnum(n: NumorStr, m: NumorStr) {
  if (typeof n === "number" && typeof m === "number") {
    return n + m;
  } else if (typeof n === "string" && typeof m === "string") {
    return n + " " + m;
  }
  return +n + +m;
}

function printResult(resultObj: ResultObj) {
  return resultObj.val;
}

// console.log("ok ===>", buttonElement);
buttonElement.addEventListener("click", () => {
  const n = nElement.value;
  const m = mElement.value;
  const result = addnum(+n, +m);
  const stringfiedResult = addnum(n, m);
  nums.push(result as number);
  texts.push(stringfiedResult as string);
  pElement.innerHTML = `${result}`;
  console.log(result);
  console.log(stringfiedResult);
  console.log(printResult({ val: result as number, timestamp: new Date() }));
  console.log("arrays =>", nums, texts);
  //   console.log(addnum(true, false));
});

// console.log(addnum(1, 2));

// console.log(addnum("1", "2"));
const p = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("it worked");
  }, 1000);
});
p.then((result) => {
  console.log(result.split(" "));
});
