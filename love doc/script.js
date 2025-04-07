function showMoreLove() {
  const message = "Stephanie, I love you more than words can say. 💖 Forever and always.";
  const container = document.getElementById("moreLove");
  container.textContent = message;

  showHeartExplosion(); // 💥 Explode hearts when message shows
}

// Floating hearts background
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 4 + 's';
  heart.style.background = getRandomHeartColor();
  heart.style.opacity = Math.random();
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

function getRandomHeartColor() {
  const colors = ['#ff3366', '#ff6699', '#ff9999', '#ff66cc', '#ff1a75'];
  return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(createHeart, 300);

// 💥 Heart Explosion on Click
function showHeartExplosion() {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.position = 'absolute';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.width = '20px';
    heart.style.height = '20px';
    heart.style.background = getRandomHeartColor();
    heart.style.opacity = 1;

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 200;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    heart.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    heartsContainer.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translate(${x}px, ${y}px) scale(1.5)`;
      heart.style.opacity = 0;
    });

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}
