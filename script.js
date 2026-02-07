let count = 0;

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("click", () => {
  count++;

  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (count >= 4) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1>Yes, I knew you would choose me 💖</h1>
    <div style="font-size:80px;">🧸💘🌹</div>
    <h2>Happy Valentine’s Day ❤️</h2>
  `;
});
