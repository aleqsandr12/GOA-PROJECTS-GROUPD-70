// 1) კომენტარების სახით ახსენით  რა არის ობიექტი
// 2) როგორ იქმნება ობიექტი?
// 3) შექმენი შენი თავის ობიექტი (სახელი, ასაკი, საყვარელი ფერი, სავარელი მანქანა...)
// 4) შექმენი შენი საყვარელი მანქანის ობიექტი 

// 5) შექმენი user ობიექტი (მომხმარებლის სახელი, ასაკი, ჰობი, საყვარელი ფერი)
// 6) შექმნილი user ობიექტიდან წამოიღეთ/ გამოიტანეთ მხოლოდ სახელი 
// 7) გამოიტანე მთლიანად user ობიექტი

// 8) ჩამოთვალე გამოძახების რამდენი სტილი არსებობს
// 9) ახსენი რა არის ობიექტში მეთოდი.
// 10) შექმნით Neymar-ზე ობიექტი სადაც იქნება კარგი ინფორმაცია. (საიდანაა, სად თამაშობს ეხლა, სად თამაშობდა ადრე...).
// დაამატეთ მეთოდი რომელსაც კონსოლში გამოაქვს თქვენი აზრით უნდა ითამაშოს 2026 წლის მსოფლიო ჩემპიონატზე თუ არა.
// საბოლოოდ კონსოლში გამოიტანეთ თითოეული value რაქ გაქვს.
// 11) გააკეთეთ calculator.  შექმენით მიმატების, გამოკლების, გაყოფის, გამრავლები, ნაშთიანი გაყოფის, ასაევე შეადარებს ორი რიცხვიდან რომელია მეტი.

// 1) და 2) ობიექტი არის key:value წყვილების კოლექცია; ობიექტი შეიძლება შეიქმნას ლიტერალით, ფუნქციით-კონსტრუქტორით ან ან კლასით

// 3) "me" ობიექტი
const me = {
	name: 'გიორგი',
	age: 22,
	favoriteColor: 'blue',
	favoriteCar: 'Mazda',
	introduce: function() {
		return `ჩემს სახელია ${this.name}, ვარ ${this.age} წლის, მიყვარს ფერი ${this.favoriteColor} და ჩემი საყვარელი მანქანა არის ${this.favoriteCar}.`;
	}
};

console.log('\n--- me object ---');
console.log(me);
console.log(me.introduce());

// 4) "myCar" ობიექტი
const myCar = {
	brand: 'Mazda',
	model: 'CX-5',
	year: 2019,
	color: 'Deep Blue',
	fullName: function() {
		return `${this.brand} ${this.model} (${this.year})`;
	}
};

console.log('\n--- myCar ---');
console.log(myCar.fullName());

// 5) user ობიექტი
const user = {
	username: 'student01',
	age: 20,
	hobby: 'football',
	favoriteColor: 'green'
};

// 6) print only name
console.log('\n--- user.name only ---');
console.log(user.username);

// 7) print full user
console.log('\n--- full user ---');
console.log(user);

// 8) invocation styles (comment):
//    - Function invocation: fn()
//    - Method invocation: obj.method()
//    - Constructor invocation: new Fn()
//    - call/apply/bind: fn.call(context, ...), fn.apply(context, argsArray), fn.bind(context)

// 9) მეთოდი ობიექტში არის ფუნქცია, რომელიც იყენებს 'this'ნ, მაგალითად:
const exampleObj = {
	value: 42,
	show: function() { console.log('value is', this.value); }
};
exampleObj.show();

// 10) Neymar object
const neymar = {
	fullName: 'Neymar Jr',
	country: 'Brazil',
	currentClub: 'Al-Hilal',
	previousClubs: ['Santos', 'Barcelona', 'PSG'],
	bornYear: 1992,
	willPlay2026: function() {
		// Estimate age in 2026
		const age2026 = 2026 - this.bornYear;
		// Allow up to 40 years for an experienced player
		return age2026 <= 40;
	}
};

console.log('\n--- Neymar ---');
console.log('Full name:', neymar.fullName);
console.log('Country:', neymar.country);
console.log('Current Club:', neymar.currentClub);
console.log('Previous Clubs:', neymar.previousClubs.join(', '));
console.log('Born:', neymar.bornYear);
console.log('Should play 2026 WC?', neymar.willPlay2026());

// 11) Calculator
const calculator = {
	add: function(a, b) { return a + b; },
	sub: function(a, b) { return a - b; },
	mul: function(a, b) { return a * b; },
	div: function(a, b) { return b === 0 ? null : a / b; },
	mod: function(a, b) { return a % b; },
	compare: function(a, b) { return a === b ? 'equal' : (a > b ? `${a} is greater` : `${b} is greater`); }
};

console.log('\n--- Calculator demos ---');
console.log('5 + 2 =', calculator.add(5, 2));
console.log('5 - 2 =', calculator.sub(5, 2));
console.log('5 * 2 =', calculator.mul(5, 2));
console.log('5 / 2 =', calculator.div(5, 2));
console.log('5 % 2 =', calculator.mod(5, 2));
console.log('Compare 5 and 2:', calculator.compare(5, 2));

// Expose for testing in console
if (typeof window !== 'undefined') {
	window.__homework = { me, myCar, user, neymar, calculator };
}

