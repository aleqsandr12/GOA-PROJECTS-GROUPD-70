// 1) 1. შეამოწმე რიცხვი 100-ზე მეტია თუ არა.
// 2. მომხმარებლის სახელისთვის: თუ "kocho" → "Welcome back", სხვა შემთხვევაში "Hello"
// 3. თუ ასაკი < 13 → "child", თუ 13–17 → "teen", სხვა შემთხვევაში "adult".
// 4. შეამოწმე რიცხვი 0-ის ტოლია თუ არა.
// 5. თუ პაროლი 8 სიმბოლოზე მეტია → "strong", ნაკლებია → "weak".

//  OPERATORS 
// 6. გამოთვალე 12 % 5 და დაბეჭდე შედეგი.
// 7. გააკეთე ლოგიკური შედარება: a !== b და მიღებული მნიშვნელობა დაბეჭდე.
// 8. შექმენი რიცხვი და გამოიყენე += ოპერატორი 3-ჯერ.
// 9. გამოთვალე 15 * 4 / 2 და გამოიტანე შედეგი.
// 10. შექმენი ორი boolean და შეამოწმე AND (&&) ოპერატორით.

// FOR LOOP 
// 11. დაბეჭდე 10–დან 1-მდე რიცხვები უკუღმა.
// 12. for loop-ით იპოვე 1–50-მდე კენტი რიცხვები.
// 13. for loop-ით დაითვალე 5-ის ჯერადები 1–30-მდე.
// 14. მასივში ([3,6,9,12]) გამოთვალე ელემენტების ჯამი.
// 15. მასივიდან (["js","html","css"]) for loop-ით დაბეჭდე ინდექსები + მნიშვნელობები.

// WHILE LOOP
// 16. while-ით დაბეჭდე 2–დან 20-მდე ლუწი რიცხვები.
// 17. შექმენი counter = 5 და ამატე სანამ 20-ს არ მიაღწევს.
// 18. while-ით დათვალე ჯამი მხოლოდ კენტ რიცხვებზე 1–30-მდე.
// 19. while ციკლით მოძებნე პირველი რიცხვი, რომელიც იყოფა 9-ზე.
// 20. while-ით ჩათვალე რამდენჯერ მოდის 3-ის ჯერადი 1–დან 40-მდე.

// SWITCH
// 21. switch-ით შეამოწმე "sunny", "rainy", "cloudy" — და დაბეჭდე ამინდი.
// 22. რიცხვი 1–4 → season: spring, summer, autumn, winter.
// 23. switch-ით შეამოწმე transport type: "car", "bus", "bike".
// 24. თვეების ნომრები 1–12 → switch-ით დაბეჭდე სეზონი (winter/spring/summer/autumn).
// 25. switch-ით შეამოწმე score (A/B/C/D/F) და გამოიტანე შეფასება.

// 1) Check if number is greater than 100
const num1 = 150;
console.log(num1 > 100);

// 2) Check username
const username = "kocho";
console.log(username === "kocho" ? "Welcome back" : "Hello");

// 3) Age category
const age = 15;
console.log(age < 13 ? "child" : age <= 17 ? "teen" : "adult");

// 4) Check if number equals 0
const num2 = 0;
console.log(num2 === 0);

// 5) Password strength
const password = "mypassword123";
console.log(password.length > 8 ? "strong" : "weak");

// 6) Calculate 12 % 5
console.log(12 % 5);

// 7) Logical comparison a !== b
const a = 5, b = 10;
console.log(a !== b);

// 8) Use += operator 3 times
let num3 = 10;
num3 += 3;
num3 += 3;
num3 += 3;
console.log(num3);

// 9) Calculate 15 * 4 / 2
console.log(15 * 4 / 2);

// 10) AND operator with two booleans
const bool1 = true, bool2 = false;
console.log(bool1 && bool2);

// 11) Print 10 to 1 backwards
for (let i = 10; i >= 1; i--) console.log(i);

// 12) Find odd numbers 1-50
for (let i = 1; i <= 50; i++) if (i % 2 !== 0) console.log(i);

// 13) Count multiples of 5 (1-30)
for (let i = 1; i <= 30; i++) if (i % 5 === 0) console.log(i);

// 14) Sum array elements [3,6,9,12]
let sum = 0;
const arr1 = [3, 6, 9, 12];
for (let i = 0; i < arr1.length; i++) sum += arr1[i];
console.log(sum);

// 15) Print indices and values from ["js","html","css"]
const arr2 = ["js", "html", "css"];
for (let i = 0; i < arr2.length; i++) console.log(i, arr2[i]);

// 16) Print even numbers 2-20 with while
let i = 2;
while (i <= 20) { console.log(i); i += 2; }

// 17) Counter = 5, add until 20
let counter = 5;
while (counter < 20) counter++;
console.log(counter);

// 18) Sum odd numbers 1-30 with while
let sum2 = 0, j = 1;
while (j <= 30) { if (j % 2 !== 0) sum2 += j; j++; }
console.log(sum2);

// 19) Find first number divisible by 9 with while
let k = 1;
while (k % 9 !== 0) k++;
console.log(k);

// 20) Count multiples of 3 (1-40) with while
let count = 0, m = 1;
while (m <= 40) { if (m % 3 === 0) count++; m++; }
console.log(count);

// 21) Switch weather
const weather = "sunny";
switch (weather) {
    case "sunny": console.log("Sunny"); break;
    case "rainy": console.log("Rainy"); break;
    case "cloudy": console.log("Cloudy"); break;
}

// 22) Switch season
const month = 2;
switch (month) {
    case 1: case 2: case 12: console.log("winter"); break;
    case 3: case 4: case 5: console.log("spring"); break;
    case 6: case 7: case 8: console.log("summer"); break;
    case 9: case 10: case 11: console.log("autumn"); break;
}

// 23) Switch transport type
const transport = "bike";
switch (transport) {
    case "car": console.log("Car"); break;
    case "bus": console.log("Bus"); break;
    case "bike": console.log("Bike"); break;
}

// 24) Switch month to season
const monthNum = 6;
switch (Math.floor(monthNum / 3)) {
    case 1: console.log("winter"); break;
    case 2: console.log("spring"); break;
    case 3: console.log("summer"); break;
    case 0: console.log("autumn"); break;
}

// 25) Switch score grade
const score = "A";
switch (score) {
    case "A": console.log("Excellent"); break;
    case "B": console.log("Good"); break;
    case "C": console.log("Average"); break;
    case "D": console.log("Poor"); break;
    case "F": console.log("Fail"); break;
}

// & (Bitwise AND) - ორი ბიტის AND ოპერატორი
// && (Logical AND) - ლოგიკური AND, ორივე პირობა უნდა იყოს true
// მაგალითი: 5 & 3 = 1 (ბიტის დონეზე), true && false = false (ლოგიკა)