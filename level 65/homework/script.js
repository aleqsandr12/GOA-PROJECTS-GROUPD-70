// 1) მასივი არის ელემენტების თანმიმდევრული კრებული, სადაც თითოეული ელემენტი მდებარეობს ინდექსით (0-დან ინდექსები).
// 2) friends მასივი: ამოვიყენებთ ნაკლებად რთულ სახელებს და ყველაფერს პატარა ასოებით.
// 3) მოითხოვს პირველი და ბოლო ელემენტის ამოღებას
// 4) დავამატებთ საკუთარ თავს array-ში
// 5) დავწავშოთ ბოლოს დამატებული ელემენტი
// 6) nums მასივიდან slice(0, 2) - პირველი ორი ელემენტი
// 7) colors -> მხოლოდ "green" და "blue" slice(1, 3) - ინდექსები 1 და 2

// 2) ჩემი მეგობრები (ყველა პატარა ასოებით)
const friends = ['საბა', 'თედო', 'ელენე', 'ედო'];
console.log('friends initial:', friends);

// 3) ამოვიღოთ პირველი და ბოლო ელემენტები
const removedFirst = friends.slice(0, 1)[0]; // ამოიღებს პირველ ელემენტს (без shift) 
const removedLast = friends.pop(); // ამოიღებს ბოლო ელემენტს

console.log('removed first:', removedFirst);
console.log('removed last:', removedLast);
console.log('current friends:', friends);

// 4) დავამატოთ ჩვენი თავი
friends.push('me');
console.log('after push me:', friends);

// 5) კვლავ ამოღება ბოლო ელემენტის
const popped = friends.pop();
console.log('after pop:', popped);
console.log('friends now:', friends);

// 6) nums და slice() - პირველი ორი
const nums = [10, 20, 30, 40, 50];
const firstTwo = nums.slice(0, 2);
console.log('nums:', nums, 'firstTwo:', firstTwo);

// 7) colors და slice() -> green & blue
const colors = ['red', 'green', 'blue', 'yellow', 'black'];
const greenBlue = colors.slice(1, 3);
console.log('colors:', colors, 'greenBlue:', greenBlue);

// expose for console testing
if (typeof window !== 'undefined') {
	window.__homework = { friends, removedFirst, removedLast, nums, firstTwo, colors, greenBlue };
}

