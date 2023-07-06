function multiplicationTable(x) {
  for (let i = 1; i < 10; i++) {
    console.log(`${x} * ${i} = ${x * i}`);
  }
}

multiplicationTable(8);
////

function allMultiplicationTable() {
  for (let i = 1; i < 10; i++) {
    console.log("\n");
    console.log(`[${i}단]`);
    multiplicationTable(i);
  }
}
allMultiplicationTable();
