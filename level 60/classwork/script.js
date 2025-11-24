// 1) შექმენი ობიექტი, რომელსაც ექნება:
// name
// age
// city
// და Console-ში დაიპრინტე.
const person = {
    name: "alex",
    age: 10,
    city: "batumi"
}
console.log(person.name);
console.log(person.age);
console.log(person.city);

// 2) შექმენი ობიექტი car, რომელსაც ექნება:
// brand
// model
// year
// და Console-ში დაბეჭდე მხოლოდ brand და year.
const car = {
    brand: "BMW",
    model: "E-39",
    year: 2005
};
console.log("The car is " + car.brand + " and it was released in " + car.year + ".");

// 3) შექმენი ობიექტი user, რომელსაც ექნება:

// name
// დაამატეთ მეთოდი  sayHello() → რომელიც დაბეჭდავს "Hello"
const user = {
    name: "Alice",
    sayHello: function() {
        console.log("Hello");
    }
};
console.log(user.name);
user.sayHello();

// 4) შექმენით კალკულატორი obj-თი (დაგჭირდებათ მეთოდები)
// უნდა ქონდეს მიმატების, გამოკლების, გაყოფის და გამრავლების მეთოდები
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};
// 5) შექმენი ობიექტი რომელსაც ექნება მეთოდი, ობიექტს ექნება სახელი და ასაკი, ამ მეთოდმა უნდა გააკეთოს "ჩემი სახელია [სახელი] და ვარ [ასაკი]"
const great = {
    name: "alex",
    age: 10,
    greet: function() {
        console.log("My name is " + this.name + " and I am " + this.age + ".");
    }
};

great.greet();

