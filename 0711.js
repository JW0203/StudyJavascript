// 최대값 을 구하는 함수

function max(array) {
  let maxValue = array[0];
  for (const value of array) {
    if (maxValue < value) {
      maxValue = value;
    }
  }
  return maxValue;
}

const test = [1, 123, 323, 1000, 44];
console.log(`Among ${test},`);
console.log(`Max value is ${max(test)}`);

// 화살표 함수
// const even = (a) => {
//   return a % 2 == 0;
// };

const even2 = (a) => a % 2 == 0;

let evenList = [];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
for (const i of numbers) {
  if (even2(i)) {
    evenList.push(i);
  }
}

console.log(evenList);
