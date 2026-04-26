// ===========================
// Active Nav + Intersection Observer
// ===========================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');

function setActiveNav(id) {
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.section === id) {
      item.classList.add('active');
    }
  });
}

// Intersection Observer for scroll-based active nav
const observerOptions = {
  root: null,
  rootMargin: '-30% 0px -60% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActiveNav(entry.target.id);
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Click nav links
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = item.dataset.section;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveNav(sectionId);
    }
  });
});

// ===========================
// Contact Form
// ===========================
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const originalText = btn.innerHTML;

  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    Message Sent!
  `;
  btn.style.background = '#4CAF50';
  btn.style.color = '#fff';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
    document.getElementById('contact-form').reset();
  }, 3000);
}

// ===========================
// Profile image fallback
// ===========================
document.querySelectorAll('img').forEach(img => {
  img.onerror = function() {
    if (this.classList.contains('profile-avatar')) {
      this.src = generateAvatarDataUrl('RY');
    } else if (this.classList.contains('hero-photo')) {
      this.src = generateAvatarDataUrl('RY', 'large');
    }
  };
});

function generateAvatarDataUrl(initials, size = 'small') {
  const dim = size === 'large' ? 400 : 120;
  const canvas = document.createElement('canvas');
  canvas.width = dim;
  canvas.height = dim;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, dim, dim);
  gradient.addColorStop(0, '#FFC107');
  gradient.addColorStop(1, '#FF8F00');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, dim, dim);

  // Text
  ctx.fillStyle = '#000';
  ctx.font = `bold ${dim * 0.35}px Inter, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(initials, dim / 2, dim / 2);

  return canvas.toDataURL();
}

// ===========================
// Animate elements on scroll
// ===========================
const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, { threshold: 0.1 });

// Observe cards for animation
document.querySelectorAll('.timeline-card, .cert-item, .stat-card, .interest-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  animateObserver.observe(el);
});

// Add animate-in styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(styleSheet);

// ===========================
// Certificate Modal
// ===========================
function openCert(imgSrc, title, org) {
  const modal = document.getElementById('cert-modal');
  document.getElementById('cert-modal-img').src = imgSrc;
  document.getElementById('cert-modal-title').textContent = title;
  document.getElementById('cert-modal-org').textContent = org;
  document.getElementById('cert-modal-download').href = imgSrc;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCert() {
  const modal = document.getElementById('cert-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  // Clear image slightly after animation
  setTimeout(() => {
    document.getElementById('cert-modal-img').src = '';
  }, 300);
}

function closeCertOnOverlay(e) {
  if (e.target === document.getElementById('cert-modal')) {
    closeCert();
  }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCert();
});
