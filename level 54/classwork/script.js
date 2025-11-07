// ! დაწერე კოდი რომელიც იღებს რიცხვს 1–დან 12-მდე და აბრუნებს შესაბამისი თვის სახელს.
// !თუ სხვა რიცხვია, დაბეჭდოს "Invalid month". (გამოიყენე switch)
let monthNumber = 5;
let monthName;

switch (monthName) {
    case 1: monthName = "january"; break;
    case 2: monthName = "february"; break;
    case 3: monthName = "march"; break;
    case 4: monthName = "april"; break;
    case 5: monthName = "may"; break;
    case 6: monthName = "June"; break;
    case 7: monthName = "July"; break;
    case 8: monthName = "August"; break;
    case 9: monthName = "September"; break;
    case 10: monthName = "October"; break;
    case 11: monthName = "November"; break;
    case 12: monthName = "December"; break;
    default: monthName = "Invalid month";
}
console.log(monthName);

//! 2)დაწერე კოდი რომელიც იღებს ასო ქულას ("A", "B", "C", "D", "F")
//! და დაბეჭდავს შეფასებას:

//! "A" → "Excellent!"

//! "B" → "Good"

//! "C" → "Average"

//! "D" → "Poor"

//! "F" → "Fail"

//! სხვა სიმბოლო → "Invalid grade"
let grade = "B";
let message;

switch (grade) {
  case "A": message = "Excellent!"; break;
  case "B": message = "Good"; break;
  case "C": message = "Average"; break;
  case "D": message = "Poor"; break;
  case "F": message = "Fail"; break;
  default: message = "Invalid grade";
}
console.log(message);
//! 3) დაწერე for loop, რომელიც დაბეჭდავს რიცხვებს 1-დან 10-მდე.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//! 4) დაწერე for loop, რომელიც დაბეჭდავს მხოლოდ ლუწ რიცხვებს 0-დან 20-მდე.
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//! 5) დაბეჭდე რიცხვები 10-დან 1-მდე while loop-ის გამოყენებით
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}
//! 6) დაწერე განსხვავება do...while loopსა და while loopს შორის
//* while loop — ჯერ ამოწმებს პირობას და მერე ასრულებს მოქმედებას.
//* do...while loop — პირველად ასრულებს მოქმედებას და შემდეგ ამოწმებს პირობას.
//* ანუ do...while მინიმუმ ერთხელ მაინც შესრულდება, მაშინაც კი თუ პირობა თავიდანვე არასწორია.
//! 7) დაწერე პროგრამა, რომელიც do...while-ით დაბეჭდავს რიცხვებს 1-დან 10-მდე.
let n = 1;
do {
  console.log(n);
  n++;
} while (n <= 10);
