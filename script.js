const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++;
    update();
  }
});

prev.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
    update();
  }
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Update progress width: Since we have 5 circles, 4 gaps in between
  const progressPercent = ((currentActive - 1) / (circles.length - 1)) * 100;
  progress.style.width = progressPercent + '%';

  // Button state
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}

