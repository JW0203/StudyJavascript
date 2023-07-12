// add function

const sum = (a, b) => a + b;

console.log(`5 와 6의 합은 ${sum(5, 6)}입니다.`);

const multiplyAll = (a, b) => {
  multy = 1;
  for (let i = a; i <= b; i++) {
    multy *= i;
  }
  return `${a} \~ ${b}까지 모두 곱하면 ${multy} 입니다.`;
};

console.log(`${multiplyAll(1, 10)}`);
console.log(`${multiplyAll(1, 10)}`);

//----------------------------------------------
console.log("-- Odd or Even");
const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return `${number} 은 짝수입니다.`;
  } else {
    return `${number} 은 홀수입니다.`;
  }
};

console.log(`${oddOrEven(17)}`);
console.log(`${oddOrEven(16)}`);

//----------------------------------------------
console.log("-- students with high scores");

const isGoodStudent = (student) => {
  cnt100 = 0;
  cntOver90 = 0;
  // 오류 발생 ==> in 으로 해서  i 에 인덱스가 전달됨
  // 수정   in -> of
  for (const i of Object.keys(student)) {
    if (student[i] === 100) {
      cnt100 += 1;
    }
    if (student[i] >= 90) {
      cntOver90 += 1;
    }
  } //이 것을 안 닫아줘서 문제 발생

  if (cntOver90 >= 3 || cnt100 >= 2) {
    return true;
  } else {
    return false;
  }
};

const student1 = {
  korean: 90,
  english: 93,
  math: 92,
};

const student2 = {
  korean: 100,
  english: 100,
  math: 68,
};

const student3 = {
  korean: 88,
  english: 91,
  math: 89,
};

console.log(isGoodStudent(student1));
console.log(isGoodStudent(student2));
console.log(isGoodStudent(student3));

//----------------------------------------------

console.log("-- Attendace check");

const students = ["경훈", "연진", "재훈", "사라"];
console.log("- using index -");
students.forEach((value, index) => console.log(`${students[index]} 왔니?`));
console.log("- using value -");
students.forEach((value, index) => console.log(`${value} 왔니?`));

//----------------------------------------------
console.log("-- make full name");

const users = [
  {
    firstName: "재성",
    lastName: "박",
  },
  {
    firstName: "동은",
    lastName: "문",
  },
  {
    firstName: "연진",
    lastName: "박",
  },
];

const fullNames = users.map(function (element) {
  return element["lastName"] + element["firstName"];
});
console.log(fullNames);

// imrove the code
const fullNamesRe = users.map(
  (element) => `${element["lastName"]}${element["firstName"]}`
);
console.log(fullNamesRe);

//----------------------------------------------

console.log("-- print name of top students");
const studentsInfo = [
  {
    name: "박재성",
    score: 89,
  },
  {
    name: "문동은",
    score: 92,
  },
  {
    name: "박연진",
    score: 97,
  },
];

studentsInfo.filter((value) => {
  if (value["score"] >= 90) {
    console.log(value["name"]);
  }
});

// improve the code...
// {score}를 했는데 이게 되네;;
const result = studentsInfo.filter(({ score }) => score >= 90);
console.log(result);
//[ { name: '문동은', score: 92 }, { name: '박연진', score: 97 } ]

names = result.map(({ name }) => name);
console.log(names);
// [ '문동은', '박연진' ]

console.log("-to make it's short");
// refactoring?
const final = studentsInfo
  .filter(({ score }) => score >= 90)
  .map(({ name }) => name);
final.forEach((value) => console.log(value));
