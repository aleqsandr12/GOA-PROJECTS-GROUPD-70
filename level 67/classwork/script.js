//! 1) შექმენი HTML-ში ერთი <h1> ელემენტი id="title"-ით. JavaScript-ში getElementById-ით წამოიღე ეს ელემენტი და გამოიყანეთ Console-ში.
//! 2) შექმენი 3 <p> ელემენტი ერთნაირი class="text"-ით. getElementsByClassName-ით და getElementsByTagName-ით წამოიღეთ და გამოიტანეთ Console-ში. 
//! 3) კომენტარების სახით ახსენი როგორ იშიფრება DOM.
//! 4) შექმენი <div id="box"></div>. JavaScript-ში getElementById-ით წამოიღე ეს div-ი და დაუმატე სიგანე, სიმაღლე და ფონი (მაგალითად: width 100px, height 100px, backgroundColor red).
//! 5) შექმენი ერთი ღილაკი და ერთი ტექსტი (<p>). JavaScript-ში წამოიღე ტექსტი id-ით და პირდაპირ კოდში (click-ის გარეშე) გაუკეთე სტილები: ფერი, ფონტი და ზომა.


const title = document.getElementById('title');
console.log('Title element:', title);


const byClass = document.getElementsByClassName('text');
console.log('Elements by class (HTMLCollection):', byClass);
const byTag = document.getElementsByTagName('p');
console.log('Elements by tag <p> (HTMLCollection):', byTag);


// DOM იშიფრება როგორც Document Object Model


const box = document.getElementById('box');
if (box) {
	box.style.width = '100px';
	box.style.height = '100px';
	box.style.backgroundColor = 'red';
	box.style.margin = '8px 0';
}


const message = document.getElementById('message');
if (message) {
	message.style.color = '#1a73e8';
	message.style.fontFamily = 'Verdana, sans-serif';
	message.style.fontSize = '16px';
}