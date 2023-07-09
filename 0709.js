const scores = ["90점", "75점", "95점", "92점", "100점", "82점", "93점"];
const students = ["재성", "윤희", "희원", "지성", "흥민", "수지", "태원"];

console.log(" [시험 점수]");
for (const idx in scores) {
  if (scores.hasOwnProperty.call(scores, idx)) {
    let score = scores[idx];
    if (students.hasOwnProperty.call(students, idx)) {
      let student = students[idx];
      console.log(`${student} : ${score}`);
    }
  }
}

// python 에 있는 zip 기능이 없을까?
// forEach
console.log(" [시험 점수]");
scores.forEach(function (score, index) {
  console.log(`${students[index]} : ${score}`);
});

// object
console.log("----Object-----");

const examResults = {
  재성: "90점",
  윤희: "75점",
  희원: "95점",
  지성: "92점",
  흥민: "100점",
  수지: "82점",
  태원: "93점",
};

// error
// for (const iterator in examResults) {
//     console.log(`${students[index]} : ${score}`);
// }
console.log(" [시험 점수]");
for (const key in examResults) {
  if (examResults.hasOwnProperty.call(examResults, key)) {
    console.log(`${key} : ${examResults[key]}`);
  }
}

console.log("--forEach--");

// error ...    객체는 forEach 불가능
// examResults.forEach(function (value, key, result) {
//   console.log(`${key} : ${result[key]}`);
// });

// Object.keys() 사용
console.log(" [시험 점수]");
Object.keys(examResults).forEach(function (key) {
  console.log(`${key} : ${examResults[key]}`);
});
