// 1) შექმენი ობიექტი user, რომელსაც აქვს:
// name (სტრინგი)
// age (ნამბერი)
// isAdult (მეთოდი), რომელიც აბრუნებს ტექსტს:
// თუ age >= 18 → "You are an adult"
// თუ არა → "You are not an adult"
const user = {
    name: "John",
    age: 20,

    isAdult: function() {
        if (this.age >= 18) {
            return "You are an adult";
        } else {
            return "You are not an adult";
        }
    }
};

// 2) შექმენი ობიექტი car, რომელსაც აქვს:
// brand (სტრინგი)
// speed (ნამბერი)
// checkSpeed (მეთოდი), რომელიც აკონტროლებს:
// თუ speed > 120 → "Too fast!"
// თუ არა → "Speed is okay"

const car = {
    brand: "Toyota",
    speed: 130,

    checkSpeed: function() {
        if (this.speed > 120) {
            return "Too fast!";
        } else {
            return "Speed is okay";
        }
    }
};
console.log(car.checkSpeed());

// 3) შექმენი ობიექტი student, რომელსაც აქვს:
// name (სტრინგი)
// score (ნამბერი)
// passOrFail (მეთოდი), რომელიც აბრუნებს:
// თუ score >= 50 → "Passed"
// თუ არა → "Failed"

const student = {
    name: " Alice",
    score: 45,

    passOrFail: function() {
        if (this.score >= 50) {
            return "Passed";
        } else {
            return "Failed";
        }
    }
};
console.log(student.passOrFail());

// 4) შექმენი ობიექტი calculator, რომელსაც აქვს:
// n (ნამბერი)
// sumToN მეთოდი, რომელიც while loop-ით ითვლის 1+2+...+n

const calculator = {
    n: 5,
    
    sumToN: function() {
        let sum = 0;
        let i = 1;
        while (i <= this.n) {
            sum += i;
            i++;
        }
        return sum;
    }
};
console.log(calculator.sumToN());

// 5) შექმენი ობიექტი multiplier:
// number (ნამბერი)
// times (რამდენჯერ გავამრავლოთ)
// multiply მეთოდი, რომელიც while loop-ით აყვანს რიცხვს ნამრავლზე

const multiplier = {
    number: 10,
    times: 2,

    multiply: function() {
        let result = 1;
        let i = 0;
        
        while (i < this.times) {
            result *= this.number;
            i++;
        }
    }
}
console.log(multiplier.multiply());

// 6) შექმენი ობიექტი calculator:
// n (ნამბერი)
// sumToN მეთოდი, რომელიც for loop-ით ითვლის 1+2+...+n

const calculator1 = {
    n: 5,

    sumToN: function() {
        let sum = 0;
        for (let i = 1; i <= this.n; i++) {
            sum += i;
        }
        return sum;
    }
};
console.log(calculator1.sumToN());

// 7) შექმენი ობიექტი multiplier:
// number (ნამბერი)
// times (რამდენჯერ გავამრავლოთ)
// multiply მეთოდი, რომელიც for loop-ით აყვანს რიცხვს ნამრავლზე

const multiplier1 = {
    number: 10,
    times: 2,

    multiply: function() {
        let result = 1;
        for (let i = 0; i < this.times; i++) {
            result *= this.number;
        }
        return result;
    }
};
console.log(multiplier1.multiply());
