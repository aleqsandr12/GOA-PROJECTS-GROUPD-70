// 1)დაალაგე ელემენტი მისი ID-ით და შეცვალე მისი ტექსტი ღილაკზე დაჭერისას.

const myDiv = document.getElementById('myDiv');
const myButton = document.getElementById('myButton');

// ღილაკის სახელწოდების გამეორება (თუ საჭირო)
myButton.textContent = 'დაჭირე აქ';

myButton.addEventListener('click', () => {
  myDiv.textContent = 'ღილაკი დაჭერილია! ტექსტი შეიცვალა.'; // ქართული ტექსტი
});

// 2) და 3) querySelector-ის გამოყენებით ელემენტის შიგთავსის შეცვლა და ფერის შეცვლა კლიკზე
const qsDiv = document.getElementById('qsDiv');
const changeQsBtn = document.getElementById('changeQsBtn');
changeQsBtn.addEventListener('click', () => {
  qsDiv.textContent = 'შიგთავსი განახლდა querySelector()-ის დახმარებით';
});
qsDiv.addEventListener('click', () => {
  qsDiv.style.color = qsDiv.style.color === 'green' ? 'black' : 'green';
});

// 4) პარაგრაფის ტექსტის შეცვლა
const p = document.getElementById('para');
const changePBtn = document.getElementById('changePBtn');
changePBtn.addEventListener('click', () => {
  p.textContent = 'პარაგრაფის ტექსტი შეიცვალა ღილაკზე დაჭერის შემდეგ.';
});

// 5) CSS კლასების დამატება/წაშლა
const toggleClassBtn = document.getElementById('toggleClassBtn');
toggleClassBtn.addEventListener('click', () => {
  p.classList.toggle('red');
});

// 6) ალერტის ჩვენება
const alertBtn = document.getElementById('alertBtn');
alertBtn.addEventListener('click', () => {
  alert('ეს არის ალერტი!');
});

// 7) input ველის real-time ჩვენება
const input = document.getElementById('liveInput');
const reflected = document.getElementById('reflected');
input.addEventListener('input', (e) => {
  reflected.textContent = e.target.value;
});

// 8) ფორმა: გადატვირთვის გარეშე — ღილაკის კლიკით და შეტყობინების ჩვენება
const form = document.getElementById('demoForm');
const result = document.getElementById('result');
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
  const name = form.elements['name'].value;
  result.textContent = `ფორმა გაგზავნილია. გამარჯობა, ${name}!`;
  result.classList.remove('hidden');
});

