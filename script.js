history.replaceState(null, "", location.pathname);

const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");
const flakes = [];
const flakeCount = 120;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < flakeCount; i++) {
  flakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 0.5 + Math.random() * 0.8,
    d: 0.3 + Math.random() * 0.5,
    drift: Math.random() * 0.5,
    offset: Math.random() * 100
  });
}

let angle = 0;

function drawFlakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < flakeCount; i++) {
    const f = flakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  updateFlakes();
}

function updateFlakes() {
  angle += 0.003;
  for (let i = 0; i < flakes.length; i++) {
    const f = flakes[i];
    f.y += f.d;
    f.x += Math.sin(angle + f.offset) * f.drift;
    if (f.y > canvas.height) {
      f.y = -5;
      f.x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawFlakes();
  requestAnimationFrame(animate);
}

animate();