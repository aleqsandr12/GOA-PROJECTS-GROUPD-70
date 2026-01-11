// 1)კომენტარების სახით ახსენი რა არის DOM და რა როლს ასრულებს ვებგვერდზე.
// DOM (Document Object Model) არის ვებგვერდის სტრუქტურული წარმოდგენა, რომელიც საშუალებას აძლევს პროგრამებს და სკრიპტებს დინამიურად წვდომა მიიღონ და შეცვალონ HTML და CSS ელემენტები. DOM წარმოადგენს ვებგვერდს როგორც ხეს, სადაც თითოეული ელემენტი (მაგალითად, ტეგები, ატრიბუტები და ტექსტი) არის ობიექტი, რომელსაც შეუძლია ინტერაქცია JavaScript-ის საშუალებით. ეს საშუალებას იძლევა დინამიური კონტენტის შექმნა, სტილის ცვლილება და მომხმარებლის ინტერაქციების მართვა ვებგვერდზე.
// 2) შექმენი ერთი ელემენტი id="container"-ით. JavaScript-ში getElementById-ის გამოყენებით შეცვალე მისი ზომები, ფონის ფერი და დაამრგვალე კუთხეები.
const container = document.getElementById('container');
container.style.width = '300px';
container.style.height = '200px';
container.style.backgroundColor = '#ff0000ff';
container.style.borderRadius = '15px';
// 3) შექმენი სამი div ელემენტი კლასით card-item. getElementsByClassName-ით წამოიღე ისინი და:
// A.პირველს მიანიჭე წითელი ფონური ფერი
// B.მეორეს ცისფერი
// C.მესამეს ნარინჯისფერი
const cardItems = document.getElementsByClassName('card-item');
if (cardItems.length >= 3) {
    cardItems[0].style.backgroundColor = 'red';
    cardItems[1].style.backgroundColor = 'blue';
    cardItems[2].style.backgroundColor = 'orange';
}   
// 4) შექმენი რამდენიმე <span> ელემენტი ტექსტისთვის. getElementsByTagName-ით წამოიღე ყველა span და მათზე განახორციელე ერთნაირი ტექსტის ზომა და ფერის ცვლილება.
const spans = document.getElementsByTagName('span');
for (let i = 0; i < spans.length; i++) {
    spans[i].style.fontSize = '16px';
    spans[i].style.color = '#333333';
}
// 5) შექმენი სიაში 5 <li> ელემენტი. JavaScript-ით წამოიღე ყველა <li> და ყველას დაუმატე padding: 12px ან margin-bottom: 8px.
const listItems = document.getElementsByTagName('li');  
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.padding = '12px';
    listItems[i].style.marginBottom = '8px';
}
// 6) დაამატე სურათი <img class="avatar">. JavaScript-ით წამოიღე ეს სურათი და შეცვალე სიგანე, დაამატე ჩარჩო და კუთხეების მომრგვალება.
const avatar = document.getElementsByClassName('avatar');
avatar.style.width = '150px';
avatar.style.border = '2px solid #000';
avatar.style.borderRadius = '10px';
// 7) შექმენი ღილაკი id="actionBtn". JavaScript-ით წამოიღე ღილაკი და გაუკეთე მუქი მწვანე ფონი, თეთრი ტექსტი და cursor: pointer.
const actionBtn = document.getElementById('actionBtn');
actionBtn.style.backgroundColor = '#006400';
actionBtn.style.color = 'white';
actionBtn.style.cursor = 'pointer';