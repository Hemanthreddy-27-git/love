 // ===== Floating particles =====
function createParticle() {
  const container = document.getElementById('particles');
  if (!container) return;

  const p = document.createElement('div');
  p.className = 'particle';

  const size = Math.random() * 8 + 4;
  p.style.width = size + 'px';
  p.style.height = size + 'px';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (Math.random() * 12 + 12) + 's';

  container.appendChild(p);
  setTimeout(() => p.remove(), 25000);
}

setInterval(createParticle, 350);


// ===== No button runaway (mouse + mobile) =====
const noBtn = document.getElementById('noBtn');

function moveNo() {
  const x = Math.random() * (window.innerWidth - 160);
  const y = Math.random() * (window.innerHeight - 120);

  noBtn.style.position = 'fixed';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
}

if (noBtn) {
  noBtn.addEventListener('mouseover', moveNo);
  noBtn.addEventListener('touchstart', moveNo);
}


// ===== Page system =====
const pages = {
  question: document.getElementById('questionPage'),
  letter: document.getElementById('letterPage'),
  memories: document.getElementById('memoriesPage')
};

function showPage(pageId) {
  // Hide all pages
  Object.values(pages).forEach(p => {
    if (p) {
      p.classList.add('hidden');
      p.style.display = 'none';
    }
  });

  // Show selected page
  const page = pages[pageId];
  if (page) {
    page.style.display = 'flex';

    // small delay for transition
    setTimeout(() => {
      page.classList.remove('hidden');
    }, 20);
  }

  // Letter animation
  if (pageId === 'letter') {
    setTimeout(() => {
      const card = document.querySelector('.letter-card');
      if (card) card.classList.add('visible');
    }, 200);
  }

  // Gallery animation
  if (pageId === 'memories') {
    const memories = document.querySelectorAll('.memory');
    memories.forEach((m, i) => {
      setTimeout(() => m.classList.add('visible'), 150 + i * 200);
    });
  }
}


// ===== Buttons =====
document.getElementById('yesBtn')?.addEventListener('click', () => {
  showPage('letter');
});

document.getElementById('toMemories')?.addEventListener('click', () => {
  showPage('memories');
});
