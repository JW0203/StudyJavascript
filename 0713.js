

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
    constructor(name, age, weight, university){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.university =  university;
        this.personInfo = [name, age, weight, university];
    }

    printPersonInfo(){
        let univ = false 
        if (this.university === "university"){
            univ = true;
        }
        console.log(`이름 : ${this.name}`)
        console.log(`나이 : ${this.age}`)
        console.log(`대학생인가요? : ${univ}`)
        console.log(`몸무게 :  ${this.weight}`)
    }
}

const iu = new Person("아이유", 30, 40.5, "university");
iu.printPersonInfo()


console.log("-- print exam score --")

// 객체를 입력으로 사용할때 클래스에서 아래와 같이 객체의 키값을 입력해서
// 쉽게 받기 가능
class Student{
    constructor({name, krScore, enScore}){
        this.name = name;
        this.krScore = krScore;
        this.enScore = enScore;
    }

    printScore(){
        console.log(`이름 : ${this.name}`)
        console.log(`국어 : ${this.krScore}`)
        console.log(`영어 : ${this.enScore}`)
    }
}

const studentsArray = [{name: "제이슨", krScore: 87, enScore: 92},
    {name: "레이첼", krScore: 82, enScore: 92},
    {name: "리사", krScore: 92, enScore: 88}]

studentsArray.forEach((value, index, iter) => {
    let student = value;
    let scores = new Student(student);
    scores.printScore();
    console.log("\n")
});


console.log("-- Bank account --")

class Account{
    
    constructor(accountNumber, accountHolder, balance = 0){
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
        // this.money = money
    }

    withdraw(money){
        // this.money = money
        if (this.balance === 0){
            return console.log("Your balnce is 0.");
        }else{
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