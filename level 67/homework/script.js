// 1) გადახედეთ ჩანაწერს ხელახლა.
//
// 2) რა არის DOM (Document Object Model):
// DOM არის დოკუმენტის (HTML) ობიექტების სტრუქტურ რომელიც საშუალებას იძლევა
// JavaScript-ის საშუალებით შეცვალოთ HTML ელემენტები, მათი კონტენტი და სტილი (CSS).
//ული მოდელი,
// ქვემოთ მოცემულია აუცილებელი ელემენტების სტილიზაცია და მათზე მოქმედებები იმ მეთოდებით
// რაც დავალებაში გაიბნენ: getElementById, getElementsByClassName, getElementsByTagName.

// ---- დასაწყისი: Box ----
const box = document.getElementById('box');
if (box) {
  box.style.width = '150px';
  box.style.height = '150px';
  box.style.backgroundColor = 'blue';
  box.style.borderRadius = '8px';
  box.style.margin = '10px 0';
}

// ---- card-ები ----
const cards = document.getElementsByClassName('card');
if (cards.length > 0) cards[0].style.border = '3px solid red';
if (cards.length > 1) cards[1].style.border = '3px solid green';
if (cards.length > 2) cards[2].style.border = '3px solid blue';
// ცოტა spacing რომ ვიზუალურად განსხვავდებოდეს
for (let i = 0; i < cards.length; i++) {
  cards[i].style.padding = '8px';
  cards[i].style.margin = '6px 0';
}

// ---- li ელემენტები ----
const listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.margin = '10px';
}

// ---- Image ----
const img = document.getElementById('photo');
if (img) {
  img.style.width = '200px';
  img.style.borderRadius = '10px';
  img.style.display = 'block';
  img.style.margin = '10px 0';
}

// ---- Button ----
const btn = document.getElementById('btn');
if (btn) {
  btn.style.backgroundColor = 'black';
  btn.style.color = 'white';
  btn.style.cursor = 'pointer';
  btn.style.padding = '8px 12px';
  btn.style.border = 'none';
  btn.style.borderRadius = '4px';
}

// მცირე ფუნქციები დემოსთვის: ღილაკზე კლიკი შეცვლის box-ის ფ colors
if (btn && box) {
  btn.addEventListener('click', () => {
    box.style.backgroundColor = box.style.backgroundColor === 'blue' ? 'darkorange' : 'blue';
  });
}