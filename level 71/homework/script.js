// 1) შექმენი ტექსტის ყუთი (<div>) და ღილაკი. ღილაკზე დაჭერისას innerHTML-ით გამოჩნდეს დღევანდელი თარიღი.
const dateBox = document.createElement('div');
const dateButton = document.createElement('button');
dateButton.textContent = 'Show Today\'s Date';
dateButton.addEventListener('click', () => {
    const today = new Date();
    dateBox.innerHTML = `Today's date is: ${today.toDateString()}`;
});
document.body.appendChild(dateBox);
document.body.appendChild(dateButton);

// 2) შექმენი <div id="notification"></div>. JS-ით innerHTML-ის დახმარებით გამოიტანე მოკლე შეტყობინება: "New message received!".
const notificationDiv = document.createElement('div');
notificationDiv.id = 'notification';
notificationDiv.innerHTML = 'New message received!';
document.body.appendChild(notificationDiv);

// 3) შექმენი ფოტო <img> ელემენტი და ღილაკი. innerHTML-ის ნაცვლად ატრიბუტის ცვლილებით შეცვალე ფოტოს წყარო და დაამატე classList.add() ახალი სტილისთვის.
const imgElement = document.createElement('img');
const imgButton = document.createElement('button');
imgButton.textContent = 'Change Image';
imgButton.addEventListener('click', () => {
    imgElement.src = 'https://via.placeholder.com/150';
    imgElement.classList.add('new-style');
});
document.body.appendChild(imgElement);
document.body.appendChild(imgButton);

// 4) შექმენი <div class="box"></div> CSS-კლასით .highlight (სათითაო ფონი). ღილაკზე დაჭერისას შეცვალე classList.toggle()–ით ფონის ფერი.
const boxDiv = document.createElement('div');
boxDiv.className = 'box highlight';
boxDiv.textContent = 'This is a box';;
const boxButton = document.createElement('button');
boxButton.textContent = 'Toggle Highlight';
boxButton.addEventListener('click', () => {
    boxDiv.classList.toggle('highlight');
});
document.body.appendChild(boxDiv);
document.body.appendChild(boxButton);

// 5) ორი ღილაკი: ერთით დაამატე classList.add() ტექსტზე ელემენტის გამოჩენა, მეორით classList.remove() – ტექსტის დამალვა.
const textDiv = document.createElement('div');
textDiv.textContent = 'This text can be shown or hidden.';
const showButton = document.createElement('button');
showButton.textContent = 'Show Text';
showButton.addEventListener('click', () => {
    textDiv.classList.add('visible');
});
const hideButton = document.createElement('button');
hideButton.textContent = 'Hide Text';
hideButton.addEventListener('click', () => {
    textDiv.classList.remove('visible');
});
document.body.appendChild(textDiv);
document.body.appendChild(showButton);
document.body.appendChild(hideButton);

// 6) შექმენი small quiz: <div>-ში innerHTML-ის გამოყენებით გამოიტანე კითხვა, და პასუხის ღილაკზე დაჭერისას classList.add()–ით მიუთითე სწორ/არასწორ პასუხზე.
const quizDiv = document.createElement('div');
quizDiv.innerHTML = `
    <p>What is 2 + 2?</p>
    <button id="answer1">3</button>
    <button id="answer2">4</button>
`;
quizDiv.querySelector('#answer1').addEventListener('click', () => {
    quizDiv.classList.add('wrong-answer');
});
quizDiv.querySelector('#answer2').addEventListener('click', () => {
    quizDiv.classList.add('correct-answer');
});

// 7) შექმენი shopping cart ელემენტი: <div id="cart"></div>. ღილაკზე innerHTML-ის გამოყენებით დაამატე ნივთი სიაში, classList.add()–ით მიუთითე, რომ ეს ახალი ნივთია.
const cartDiv = document.createElement('div');
cartDiv.id = 'cart';
const addItemButton = document.createElement('button');
addItemButton.textContent = 'Add Item to Cart';
addItemButton.addEventListener('click', () => {
    cartDiv.innerHTML += '<p class="new-item">New Item Added</p>';
});
document.body.appendChild(cartDiv);
document.body.appendChild(addItemButton);
document.body.appendChild(quizDiv);

// 8) შექმენი <div> და innerHTML-ის დახმარებით დაამატე ბუტონები: ერთი classList.toggle()–ით შეცვლის ფონს, მეორე classList.toggle()–ით შეცვლის ტექსტის ფერს.
const toggleDiv = document.createElement('div');
toggleDiv.innerHTML = `
    <button id="bgToggle">Toggle Background Color</button>
    <button id="textToggle">Toggle Text Color</button>
    <p>This text will change colors.</p>
`;
toggleDiv.querySelector('#bgToggle').addEventListener('click', () => {
    toggleDiv.classList.toggle('bg-changed');
});
toggleDiv.querySelector('#textToggle').addEventListener('click', () => {
    toggleDiv.classList.toggle('text-changed');
});
document.body.appendChild(toggleDiv);
