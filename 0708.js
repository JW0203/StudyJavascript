// 1~ 50까지의 합
let sum = 0;
for (i = 1; i < 51; i++) {
  sum += i;
}
console.log(`1 부터 50까지의 합은 ${sum}입니다.`);

// 7명의 학생의 이름을 출력해라.
// 리스트를 바로 for 문으로 받는 방법은 없을까??  -> for of

// 내가 한것
const students = ["재성", "윤희", "희원", "지성", "흥민", "수지", "태원"];
for (i = 0; i < students.length; i++) {
  console.log(`${students[i]}`);
}

console.log("------");
for (i = 0; i < students.length; i++) {
  console.log(`${students[i]} 출석완료`);
}

// 문법을 지키면  -> let 을 선언해야한다.
for (let i = 0; i < students.length; i++) {
  console.log(`${students[i]}`);
}

// length 를 사용안해도 인덱스를 반환할 수 있다.
for (const i in students) {
  console.log(`${students[i]}`);
}

// 7명 학생의 이름과 점수를 출력해라
