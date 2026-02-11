const loveMessage = 
"Every moment with you is special. You are my happiness, my strength, and my forever. I love you more than words can say ❤️";

function showMessage() {
  const messageSection = document.getElementById("message");
  const music = document.getElementById("bgMusic");

  // Show section
  messageSection.style.display = "block";

  // Small delay then add animation class
  setTimeout(() => {
    messageSection.classList.add("show");
  }, 100);

  // Smooth scroll
  messageSection.scrollIntoView({ behavior: "smooth" });

  // Play music
  music.play();

  // Start typewriter
  typeWriter();

  // Start floating hearts
  startHearts();
}

function typeWriter() {
  const textElement = document.getElementById("typeText");
  let i = 0;

  function typing() {
    if (i < loveMessage.length) {
      textElement.innerHTML += loveMessage.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }

  typing();
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 500);
}
function openProposal() {
  document.getElementById("proposal").style.display = "flex";
}

function sayYes() {
  const box = document.querySelector(".proposal-box");

  box.innerHTML = `
    <h2>YAYYYY 😍💍</h2>
    <p>I love you forever and ever ❤️</p>
    <button onclick="closeProposal()">Close 💕</button>
  `;

  startHearts();
}

// Funny running No button
document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.getElementById("noBtn");

  if (noBtn) {
    noBtn.addEventListener("mouseover", function () {
      noBtn.style.position = "absolute";
      noBtn.style.top = Math.random() * 300 + "px";
      noBtn.style.left = Math.random() * 300 + "px";
    });
  }
});
function closeProposal() {
  document.getElementById("proposal").style.display = "none";
}
