// 1) შექმენი ობიექტი user და დაამატე თვისება age. შექმენი მეთოდი, რომელიც აბრუნებს "Adult" თუ ასაკი >= 18, სხვა შემთხვევაში "Minor".
const user = {
    age: 20,
    checkAge: function() {
        if (this.age >= 18) {
            return "Adult";
        } else {
            return "Minor";
        }
    }
};
// 2) შექმენი ობიექტი car და დაამატე თვისება speed. შექმენი მეთოდი, რომელიც აბრუნებს "Too fast" თუ სიჩქარე > 120, სხვა შემთხვევაში "Speed okay".

const car = {
    speed: 130,
    checkSpeed: function() {
        if (this.speed > 120) {
            return "Too fast";
        } else {
            return "Speed okay";
        }
    }
};
// 3) შექმენი ობიექტი student და დაამატე თვისება score. შექმენი მეთოდი, რომელიც აბრუნებს "Passed" თუ ქულა >= 50, სხვა შემთხვევაში "Failed".

const student = {
    score: 45,
    checkScore: function() {
        if (this.score >= 50) {
            return "Passed";
        } else {
            return "Failed";
        }
    }
};
// 4) შექმენი ობიექტი numbers (მასივი) და მეთოდი, რომელიც for loop-ით აბრუნებს მხოლოდ დადებით რიცხვებს.

const numbersObj = {
    numbers: [-10, 5, -3, 8, 0, -1, 7],
    getPositiveNumbers: function() {
        const positiveNumbers = [];
        for (let i = 0; i < this.numbers.length; i++) {
            if (this.numbers[i] > 0) {
                positiveNumbers.push(this.numbers[i]);
            }
        }
        return positiveNumbers;
    }
};
// 5) შექმენი ობიექტი repeater და დაამატე თვისება text და count. შექმენი მეთოდი, რომელიც while loop-ით აჩვენებს ტექსტს რამდენჯერაც მითითებულია.

const repeater = {
    text: "Hello",
    count: 3,
    repeatText: function() {
        let result = "";
        let i = 0;
        while (i < this.count) {
            result += this.text + " ";
            i++;
        }
        return result.trim();
    }
};
// 6) შექმენი ობიექტი calculator და დაამატე თვისება n. შექმენი მეთოდი, რომელიც for loop-ით ითვლის 1–დან n-მდე ჯამს.

const calculator = {
    n: 5,
    sumUpToN: function() {
        let sum = 0;
        for (let i = 1; i <= this.n; i++) {
            sum += i;
        }
        return sum;
    }
};
// 7) შექმენი ობიექტი doubler და დაამატე თვისება numbers (მასივი). შექმენი მეთოდი, რომელიც for loop-ით გაძლიერებს თითო რიცხვს 2-ჯერ და აბრუნებს ახალ მასივს.

const doubler = {
    numbers: [1, 2, 3, 4, 5],
    doubleNumbers: function() {
        const doubled = [];
        for (let i = 0; i < this.numbers.length; i++) {
            doubled.push(this.numbers[i] * 2);
        }
        return doubled;
    }
};
// 8) შექმენი ობიექტი day და დაამატე თვისება hour. შექმენი მეთოდი, რომელიც აბრუნებს "Morning", "Afternoon", "Evening" ან "Night" if…else-ით.

const day = {
    hour: 14,
    getTimeOfDay: function() {
        if (this.hour >= 5 && this.hour < 12) {
            return "Morning";
        } else if (this.hour >= 12 && this.hour < 17) {
            return "Afternoon";
        }
        else if (this.hour >= 17 && this.hour < 21) {
            return "Evening";
        }
        else {
            return "Night";
        }
    }
};
// 9) შექმენი ობიექტი scoreboard და დაამატე თვისება scores (მასივი). შექმენი მეთოდი, რომელიც while loop-ით ითვლის ჯამს.

const scoreboard = {
    scores: [10, 20, 30, 40],
    sumScores: function() {
        let sum = 0;
        let i = 0;
        while (i < this.scores.length) {
            sum += this.scores[i];
            i++;
        }
        return sum;
    }
};
// 10)შექმენი ობიექტი evenCounter და დაამატე თვისება numbers (მასივი). შექმენი მეთოდი, რომელიც for loop + if-ით ითვლის რამდენი ლუწი რიცხვია მასივში.

const evenCounter = {
    numbers: [1, 2, 3, 4, 5, 6],
    countEvenNumbers: function() {
        let count = 0;
        for (let i = 0; i < this.numbers.length; i++) {
            if (this.numbers[i] % 2 === 0) {
                count++;
            }
        }
        return count;
    }
};