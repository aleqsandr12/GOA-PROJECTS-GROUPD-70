// 1.დაწერე JavaScript კოდი, რომელიც მუშაობს DOM-თან. შექმენი ერთი მთავარი div id-ს სახელით mainBox და წაართვი ის JavaScript-ში getElementById-ით. შეცვალე მისი სიგანე და სიმაღლე, დაამატე linear gradient ფონი, border-radius, padding, box-shadow და transition

const mainBox = document.getElementById("mainBox");
mainBox.style.width = "300px";
mainBox.style.height = "200px";
mainBox.style.background = "linear-gradient(to right, #ff9966, #ff5860)";
mainBox.style.borderRadius = "10px";
mainBox.style.padding = "20px";
mainBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
mainBox.style.transition = "all 0.3s ease";

// 2.შექმენი სამი div ელემენტი კლასით feature-card და წამოიღე getElementsByClassName-ით. თითოეულს მიანიჭე სხვადასხვა ფონი, დაამატე padding, margin, border-radius, font-size, text-align, ფერი, border და box-shadow
const featureCards = document.getElementsByClassName("feature-card");
for (let i = 0; i < featureCards.length; i++) {
    featureCards[i].style.padding = "15px";
    featureCards[i].style.margin = "10px";
    featureCards[i].style.borderRadius = "8px";
    featureCards[i].style.fontSize = "16px";
    featureCards[i].style.textAlign = "center";
    featureCards[i].style.color = "#fff";
    featureCards[i].style.border = "1px solid #ccc";
    featureCards[i].style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    if (i === 0) {
        featureCards[i].style.background = "#3498db";
    } else if (i === 1) {
        featureCards[i].style.background = "#e74c3c";
    } else if (i === 2) {
        featureCards[i].style.background = "#2ecc71";
    }
}

// 3.შექმენი რამდენიმე span ელემენტი და წამოიღე getElementsByTagName-ით. ყველას დანიშვნა ერთიანი font-size, ფერი, font-weight და letter-spacing
const spans = document.getElementsByTagName("span");
for (let i = 0; i < spans.length; i++) {
    spans[i].style.fontSize = "14px";
    spans[i].style.color = "#333";
    spans[i].style.fontWeight = "bold";
    spans[i].style.letterSpacing = "1px";
}

// 4.შექმენი 5 li ელემენტი სიაში და JS-ში წამოიღე getElementsByTagName-ით. ყველა li-ს დაუმატე padding, margin-bottom, background-color, border-radius, list-style-type, text-transform. პირველი li-ს ტექსტის ფერი გახადე წითელი, ბოლოას მწვანე
const ul = document.getElementsByTagName("ul");
for (let i = 1; i <= 5; i++) {
    const li = document.getElementsByTagName("li")[i - 1];
    li.textContent = `Item ${i}`;
    li.style.padding = "10px";
    li.style.marginBottom = "5px";
    li.style.backgroundColor = "#f0f0f0";
    li.style.borderRadius = "5px";
    li.style.listStyleType = "none";
    li.style.textTransform = "uppercase";
    if (i === 1) {
        li.style.color = "red";
    } else if (i === 5) {
        li.style.color = "green";
    }
}

// 5.დაამატე სურათი კლასით profilePic და JS-ში წამოიღე. დაუმატე სიგანე, height auto, border, border-radius და box-shadow
const profilePic = document.getElementsByClassName("profilePic")[0];
profilePic.style.width = "150px";
profilePic.style.height = "auto";
profilePic.style.border = "2px solid #ccc";
profilePic.style.borderRadius = "50%";
profilePic.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

// 6.შექმენი ღილაკი id-ს სახელით submitBtn და JS-ში წამოიღე. დაუმატე background, ფერი, padding, font-size, border, border-radius, cursor და box-shadow
const submitBtn = document.getElementById("submitBtn");
submitBtn.style.background = "#3498db";
submitBtn.style.color = "#fff";
submitBtn.style.padding = "10px 20px";
submitBtn.style.fontSize = "16px";
submitBtn.style.border = "none";
submitBtn.style.borderRadius = "5px";
submitBtn.style.cursor = "pointer";
submitBtn.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

// 7.ახსენი კომენტარებით რა არის DOM და ასევე ახსენი ხის მაგალითზე
// DOM (Document Object Model) არის ვებგვერდის სტრუქტურული წარმოდგენა, რომელიც საშუალებას აძლევს პროგრამებს და სკრიპტებს დინამიურად წვდომა მიიღონ და შეცვალონ HTML და CSS ელემენტები. DOM წარმოადგენს ვებგვერდს როგორც ხეს, სადაც თითოეული ელემენტი (მაგალითად, ტეგები, ატრიბუტები და ტექსტი) არის ობიექტი, რომელსაც შეუძლია ინტერაქცია JavaScript-ის საშუალებით. ეს საშუალებას იძლევა დინამიური კონტენტის შექმნა, სტილის ცვლილება და მომხმარებლის ინტერაქციების მართვა ვებგვერდზე.

// 8.გადახედეთ ჩანაწერს.
// DONE✅

// 9.უყურეთ ამ ვიდეოს:
// https://www.youtube.com/watch?v=8hB-z8vRvi0&t=22s
// DONE✅
