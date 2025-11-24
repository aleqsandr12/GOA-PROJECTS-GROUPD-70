// 1) შეამოწმე: რიცხვი > 0ა?
const num1 = 5;
console.log(num1 > 0);

// 2) შეამოწმე: რიცხვი ლუწია თუ კენტი.
const num2 = 3;
console.log(num2 % 2 === 0 ? "ლუწი" : "კენტი");

// 3) სამი რიცხვიდან გამოიტანე ყველაზე დიდი.
const a = 10, b = 25, c = 15;
console.log(Math.max(a, b, c));

//  * - Math.max(...numbers): არეტურნებს უმაღლეს მოცემული რიცხვებიდან
//  * - Math.min(...numbers): არეტურნებს უმცირეს მოცემული რიცხვებიდან
// 4) სია: 5 + 7, 10 - 4, 3 * 3, 20 / 2 – ყველა console.log-ით.
console.log(5 + 7);
console.log(10 - 4);
console.log(3 * 3);
console.log(20 / 2);

// 5) შეადარე ორი რიცხვი: >, <, ===, !==.
const x = 10, y = 20;
console.log(x > y, x < y, x === y, x !== y);

// 6) ცვლადის გაზრდა: შექმენი num = 0 და num++ 3-ჯერ.
let num = 0;
num++;
num++;
num++;
console.log(num);

// 7) დაბეჭდე 1–დან 20-მდე ყველა რიცხვი.
for (let i = 1; i <= 20; i++) console.log(i);

// 8) დაბეჭდე 1–30-მდე მხოლოდ ლუწები.
for (let i = 2; i <= 30; i += 2) console.log(i);

// 9) იპოვე ჯამი 1–50-მდე რიცხვების.
let sum = 0;
for (let i = 1; i <= 50; i++) sum += i;
console.log(sum);

// 10) while-ით დაბეჭდე 1–დან 5-მდე რიცხვები.
let i = 1;
while (i <= 5) console.log(i++);

// 11) შექმენი counter = 0 და ზრდე სანამ < 10 იქნება.
let counter = 0;
while (counter < 10) counter++;
console.log(counter);

// 12) while-ით დათვალე ჯამი 1–დან 20-მდე.
let sum2 = 0, j = 1;
while (j <= 20) sum2 += j++;
console.log(sum2);

// 13) მიანიჭე ცვლადს "apple" და switch-ით დაწერე:
const fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("fruit");
        break;
    case "carrot":
        console.log("vegetable");
        break;
    default:
        console.log("unknown");
}