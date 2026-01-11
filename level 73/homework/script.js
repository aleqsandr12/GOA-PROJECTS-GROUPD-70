// 1)Smart Message Box
// შექმენი div id="messageBox" და ღილაკი
// ღილაკზე დაჭერისას უნდა შეიცვალოს ტექსტი
// ფერი უნდა შეიცვალოს CSS კლასის დახმარებით
// მეორედ დაჭერაზე ყველაფერი უნდა დაბრუნდეს საწყის მდგომარეობაში
// გამოიყენე getElementById click innerHTML classList.toggle.


// 2)Color Hover Panel
// შექმენი div class="panel"
// JS–ით querySelector–ის გამოყენებით მოძებნე ეს ელემენტი
// მაუსის მიყვანისას უნდა შეეცვალოს ფერი
// მაუსის გაწევისას უნდა დაუბრუნდეს საწყის ფერს.


// 3)Live Comment Viewer
// შექმენი input ველი და p ელემენტი
// რაც მომხმარებელი აკრიფავს input–ში რეალურ დროში უნდა გამოჩნდეს p–ში
// თუ input ცარიელია p–ში უნდა ეწეროს Start typing…
// გამოიყენე input event innerHTML value.

// 4)Add New Paragraph
// შექმენი ღილაკი
// ღილაკზე დაჭერისას უნდა შეიქმნას ახალი p ელემენტი ტექსტით New paragraph created
// და დაემატოს გვერდზე
// გამოიყენე click createElement appendChild.

// 5)Show / Hide Info
// შექმენი ტექსტი რომელიც თავიდან დამალულია
// შექმენი ღილაკი
// ღილაკზე დაჭერით ტექსტი უნდა გამოჩნდეს
// მეორედ დაჭერით ისევ უნდა დაიმალოს
// გამოიყენე classList.toggle ან classList.add და remove.

// 6)Alert Button
// შექმენი ღილაკი
// ღილაკზე დაჭერისას უნდა გამოჩნდეს alert ტექსტით You clicked the alert button.

// 7)Contact Mini Form
// შექმენი პატარა ფორმა სახელისა და შეტყობინების input ველებით
// გაგზავნისას გვერდი არ უნდა გადატვირთოს
// უნდა გამოჩნდეს alert ტექსტით Message sent successfully
// გამოიყენე submit event და preventDefault.
/* 1) Smart Message Box */
const messageBox = document.getElementById("messageBox");
const msgBtn = document.getElementById("msgBtn");
const originalText = messageBox.innerHTML;

msgBtn.addEventListener("click", () => {
    messageBox.classList.toggle("activeMessage");

    if (messageBox.classList.contains("activeMessage")) {
        messageBox.innerHTML = "Message changed!";
    } else {
        messageBox.innerHTML = originalText;
    }
});

/* 2) Color Hover Panel */
const panel = document.querySelector(".panel");

panel.addEventListener("mouseenter", () => {
    panel.style.backgroundColor = "orange";
});

panel.addEventListener("mouseleave", () => {
    panel.style.backgroundColor = "lightgray";
});

/* 3) Live Comment Viewer */
const commentInput = document.getElementById("commentInput");
const commentText = document.getElementById("commentText");

commentInput.addEventListener("input", () => {
    commentText.innerHTML = commentInput.value === ""
        ? "Start typing…"
        : commentInput.value;
});

/* 4) Add New Paragraph */
const addParaBtn = document.getElementById("addParaBtn");
const paraContainer = document.getElementById("paraContainer");

addParaBtn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerHTML = "New paragraph created";
    paraContainer.appendChild(p);
});

/* 5) Show / Hide Info */
const toggleInfoBtn = document.getElementById("toggleInfoBtn");
const infoText = document.getElementById("infoText");

toggleInfoBtn.addEventListener("click", () => {
    infoText.classList.toggle("hidden");
});

/* 6) Alert Button */
document.getElementById("alertBtn").addEventListener("click", () => {
    alert("You clicked the alert button.");
});

/* 7) Contact Mini Form */
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully");
});
