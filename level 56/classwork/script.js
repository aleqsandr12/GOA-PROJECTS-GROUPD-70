// 1) შექმენი ფუნქცია sayHello() — რომელიც დაბეჭდავს ტექსტს "Hello World".
function sayHello(say) {
    console.log("Hello World")
}
sayHello()

// 2) შექმენი ფუნქცია greet(name) — რომელიც არგუმენტად მიიღებს სახელს და დაბეჭდავს "Hello, [name]!".
function greet(name) {
    console.log("Hello" + " " + name + "!")
}
greet("Void")

// 3) შექმენი ფუნქცია add(a, b) — რომელიც დააბრუნებს ორი რიცხვის ჯამს.
function add(a , b) {
    console.log(a + b)
}
add(500 , 500)

// 4) შექმენი arrow
//  ფუნქცია square(num) — რომელიც დააბრუნებს რიცხვის კვადრატს.
const square = num => console.log(num * num);
square(5)

// 5)  შექმენი Arrow ფუნქცია isEven(num) — რომელიც აბრუნებს "Even" თუ რიცხვი ლუწია და "Odd" თუ კენტი.
const isEven = num => num % 2 === 0 ? "Even" : "Odd";
console.log(isEven(4));
console.log(isEven(7));