

console.log("-- make a square")
class Square {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    calculateArea(){
        return this.width * this.height;
    }
}


const square = new Square(10, 15);
console.log(`가로 길이 : ${square.getWidth()}`); 
console.log(`세로 길이 : ${square.getHeight()}`); 
console.log(`넓이 : ${square.calculateArea()}`);


console.log("-- make a circle")

class Circle{
    constructor(radius){
        this.radius = radius;
        this.pi = 3.14
    }

    getRadius(){
        return this.radius;
    }

    calculateArea(){
        return this.pi * (this.radius **2)
    }
}

const circle = new Circle(10);
console.log(`반지름 길이 : ${circle.getRadius()}`);
console.log(`넓이 : ${circle.calculateArea()}`);


console.log("-- print Person info --")

class Person{
    constructor(name, age, weight, isUniversity){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.isUniversity = isUniversity;
        // this.personInfo = [name, age, weight, university];
    }

    toArray() {
        return [this.name, this.age, this.weight, this.university]
    }

    abcd() {
        const personInfo = this.toArray();
    }

    printPersonInfo(){
        console.log(`이름 : ${this.name}`)
        console.log(`나이 : ${this.age}`)
        console.log(`대학생인가요? : ${this.isUniversity}`)
        console.log(`몸무게 :  ${this.weight}`)
    }
}

const iu = new Person("아이유", 30, 40.5, true);
iu.printPersonInfo()


console.log("-- print exam score --")

// 객체를 입력으로 사용할때 클래스에서 아래와 같이 객체의 키값을 입력해서
// 쉽게 받기 가능
class Student{
    constructor({name, kreanScore, englishScore}){
        this.name = name;
        this.kreanScore = kreanScore;
        this.englishScore = englishScore;
    }

    printScore(){
        console.log(`이름 : ${this.name}`)
        console.log(`국어 : ${this.kreanScore}`)
        console.log(`영어 : ${this.englishScore}`)
    }
}

const studentsArray = [{name: "제이슨", kreanScore: 87, englishScore: 92},
    {name: "레이첼", kreanScore: 82, englishScore: 92},
    {name: "리사", kreanScore: 92, englishScore: 88}]

studentsArray.forEach((value, index, iter) => {
    let student = value;
    let scores = new Student(student);
    scores.printScore();
    console.log("\n")
});

//다른방식
const studentsArrayNew = [
    new Student({
        name: "제이슨",kreanScore: 87, englishScore: 92
    }),
    new Student({
        name: "레이첼", kreanScore: 82, englishScore: 92
    }),
    new Student({
        name: "리사", kreanScore: 92, englishScore: 88
    })
    
]

studentsArrayNew.forEach((value) => {
    value.printScore();
    console.log("\n")
});


console.log("-- Bank account --")

class Account{
    
    constructor(accountNumber, accountHolder){
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = 0;
        // this.money = money
    }

    // 잔고 : 1000원
    // 5000원을 인출
    withdraw(money){
        // this.money = money
        if (this.balance < money){
            return console.log("Your balnce is 0.");
        } else{
            return this.balance -= money;
        }
    }

    deposit(money){
        // this.money = money
        return this.balance += money;
    }

    getAccountNumber(){
        return this.accountNumber;
    }
    getBalance(){
        return this.balance;
    }
}


const account = new Account("1234567891234", "임정우");
// 3만원 입금
account.deposit(30000);
// 1만원 인출
account.withdraw(10000);
// 계좌번호 조회하기
console.log(`계좌번호 : ${account.getAccountNumber()}`);
// 잔액 조회하기
console.log(`잔액 : ${account.getBalance()}`);