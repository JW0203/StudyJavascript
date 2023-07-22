// 코드 수정

const score1 = 92;
if (score1 % 2 === 0) {
  console.log("짝수입니다.")
} else {
  console.log("홀수입니다.")
}

const score2 = 79;
if (score2 % 2 === 0) {
  console.log("짝수입니다.")
} else {
  console.log("홀수입니다.")
}

const score3 = 98;
if (score3 % 2 === 0) {
  console.log("짝수입니다.")
} else {
  console.log("홀수입니다.")
}

// --------- new way -------
console.log(" -- Other way")
function evenOdd(number){
    if (score3 % 2 === 0) {
        console.log("짝수입니다.")
      } else {
        console.log("홀수입니다.")
      }
}

evenOdd(score1)
evenOdd(score2)
evenOdd(score3)

console.log("---- Summation, Average, Multiply--------")

const numbers = [90, 50, 80, 92, 82];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
let multiplyAll = 1;
for (let i = 0; i < numbers.length; i++) {
  multiplyAll = multiplyAll * numbers[i];
}
let average = sum / numbers.length;

console.log(sum); // 출력값 : 394
console.log(multiplyAll); // 출력값 : 2715840000
console.log(average); // 출력값 : 78.8

console.log(" -- Other way")


const calculateSummationNumbers= (numbers) => {
    sum = 0
    for(let i in numbers){
        sum += numbers[i];
    }
    return sum;
}

const calculateAverageNumbers = (numbers) => {
    average = 0
    sumNumbsers = calculateSummationNumbers(numbers, sum)
    return sumNumbsers/numbers.length;
}

const calculateMultiplyNumbers = (numbers) => {
    multiply = 1
    for(let i in numbers){
        multiply *= numbers[i];
    }
    return multiply;
}

const sumRe = calculateSummationNumbers(numbers)
const multiplyAllRe = calculateMultiplyNumbers(numbers)
const averageRe = calculateAverageNumbers(numbers)

console.log(sumRe); // 출력값 : 394
console.log(multiplyAllRe); // 출력값 : 2715840000
console.log(averageRe); // 출력값 : 78.8