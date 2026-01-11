// 1) შექმენი მასივი, მაგალითად let fruits = ["apple", "banana"]; და გაუკეთე push() ფუნქცია, რომ დაამატო ახალი ელემენტი "kiwi" მასივში. შემდეგ გამოიტანე კონსოლში განახლებული მასივი.:
let fruits = ["apple", "banana"];
fruits.push("kiwi");
console.log(fruits);
// 2) შექმენი ნებისმიერი 5 ელემენტიანი მასივი. length თვისებით გამოიტანე ეკრანზე რამდენი ელემენტია მასივში. შემდეგ push()-ით დაამატე ორი ელემენტი და თავიდან გამოიტანე length.:
let car = ["BMW", "Mercedes", "Tesla"];

console.log(car.length);  
car.push("AUDI", "LADA");
console.log(car.length);
console.log(car);
// 3) შექმენი მასივი რიცხვებით და pop() ფუნქციით წაშალე ბოლო ელემენტი. კონსოლში გამოიტანე რა წაიშალა და როგორ გამოიყურება მასივი ბოლოს.:
let numbers = [10, 20, 30, 40, 50];

let removed = numbers.pop();  

console.log("წაიშალა:", removed);
console.log("ბოლოს მასივი:", numbers);
// 4) შექმენი პროგრამა, სადაც გექნება მარტივი შეყვანილი ტექსტი (prompt-ის მაგივრად შეგიძლია უბრალოდ ცვლადად ჩაწერო). დაამატე ტექსტი მასივში push-ით და დაბეჭდე რამდენი ელემენტი გაქვს (length).:
let text = "Hello world";  

let arr = [];

arr.push(text);

console.log("რამდენი ელემენტია:", arr.length);
console.log(arr);
// 5) შექმენი ობიექტი counter. ობიექტს ქონდეს მეთოდი სადაც უკვე შექმნილ count-s (key-ს) დაემატება 1. ეს უნდა გამეორდეს 50 ჯერ. დაგჭირდება for loop.
let counter = {
    count: 0,
    addOne: function () {
        this.count++;
    }
};

for (let i = 0; i < 50; i++) {
    counter.addOne();
}

console.log("შედეგი:", counter.count); // 50
// 6) შექმენი ობიექტი sum რომელიც გამოიტანს 1 დან 20 მდე რიცხვების ჯამს
let sum = {
    total: 0,
    calc: function () {
        for (let i = 1; i <= 20; i++) {
            this.total += i;
        }
    }
};

sum.calc();

console.log("ჯამი:", sum.total); // 210