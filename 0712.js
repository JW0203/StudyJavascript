//call back

function print(message, ls) {
  console.log(`${message}`);
  for (const i of ls) {
    console.log(`call back test: ${i}`);
  }
}

function sortTest(ls, cb) {
  ls.sort((previous, current) => previous - current);
  cb("Assending", ls);
  ls.sort((previous, current) => current - previous);
  cb("Dessending", ls);
}

let tempArr = [1, 5, 8, 3, 10];
sortTest(tempArr, print);

console.log("---forEach----");

const test = function (value, index, array) {
  console.log(tempArr[index]);
};
tempArr.forEach(test);

console.log("-------");
const test2 = (value, index, array) => {
  console.log(tempArr[index]);
};
tempArr.forEach(test2);

console.log("-------");
const test3 = (value, index, array) => console.log(tempArr[index]);
tempArr.forEach(test3);

console.log("-------");
tempArr.forEach((value, index, array) => console.log(tempArr[index]));

console.log("-------");
tempArr.forEach((element) => {
  console.log(tempArr);
});
