const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const numStars = 200;

// Fungsi untuk membuat bintang
function createStars() {
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.2
        });
    }
}

// Fungsi untuk menggambar bintang
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    stars.forEach((star) => {
        ctx.moveTo(star.x, star.y);
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    });

    ctx.fill();
}

// Fungsi untuk menggerakkan bintang
function moveStars() {
    stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });
}

// Animasi
function animate() {
    drawStars();
    moveStars();
    requestAnimationFrame(animate);
}

// Resize canvas jika layar berubah
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    createStars();
});

// Jalankan animasi
createStars();
animate();
