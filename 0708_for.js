const students = ["재성", "윤희", "희원", "지성", "흥민", "수지", "태원"];

// for in
// vscode 추천
for (const key in students) {
  // 안정성을 위한 추가
  if (Object.hasOwnProperty.call(students, key)) {
    const element = students[key];
    console.log(`${element}`);
  }
}

// for of
for (const iterator of object) {
}

array.forEach((element) => {});
