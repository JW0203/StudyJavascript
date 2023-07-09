// 학생정보 관리

const student = {
  name: "철수",
  age: 20,
  "real-friends": ["영희", "지현", "서원", "유정"],
};

console.log(" [학생 정보]");
Object.keys(student).forEach(function (key) {
  if (key === "name") {
    console.log(`이름: ${student[key]}`);
  } else if (key === "age") {
    console.log(`나이 : ${student[key]}`);
  } else if (key === "real-friends") {
    temp = student[key].join(",");
    console.log(`베프 : ${temp}`);
  }
});
