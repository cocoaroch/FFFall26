
let titleButton = document.getElementById("title-button");
let pinkButton = document.getElementById("pink-button");
let partyButton = document.getElementById("party-button");

let mainTitle = document.getElementById("main-title");
let storyText = document.getElementById("story-text");
let teamText = document.getElementById("team-text");
let cocoCard = document.getElementById("coco-card");
let eliotCard = document.getElementById("eliot-card");
let friendText = document.getElementById("friend-text");
let galleryText = document.getElementById("gallery-text");
let footerText = document.getElementById("footer-text");

titleButton.addEventListener("click", function() {
    mainTitle.innerHTML = "COCO + ELIOT TAKE THE NIGHT";
    mainTitle.style.textTransform = "uppercase";
});

pinkButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "#ffb6d9";
    storyText.style.color = "#ff1493";

    document.getElementById("story").style.backgroundColor = "#ffe4f2";
    document.getElementById("characters").style.backgroundColor = "#ffc7e3";
    document.getElementById("adventure").style.backgroundColor = "#ffe0ef";
    document.getElementById("gallery").style.backgroundColor = "#ffc1dc";

    footerText.style.color = "#ff1493";
});

partyButton.addEventListener("click", function() {
    mainTitle.innerHTML = "🎉 COCO & ELIOT PARTY MODE 🎉";

    storyText.innerHTML = "💋 Coco and Eliot are BESTIES FOREVER and tonight is officially CHAOS MODE! 💖🎉";

    teamText.innerHTML = "They are dramatic, iconic, unstoppable, and <strong>READY FOR THE NIGHT.</strong> 🍸";

    friendText.innerHTML = "💖 BEST FRIENDS FOREVER 💖";

    galleryText.innerHTML = "Partners in crime and professional chaos creators! 🎀";

    footerText.innerHTML = "COCO + ELIOT FOREVER 💕";

    document.body.classList.add("party-body");
    cocoCard.classList.add("party-card");
    eliotCard.classList.add("party-card");
    mainTitle.classList.add("party-title");
    storyText.classList.add("emoji-text");
});
