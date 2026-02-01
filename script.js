// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const header = document.querySelector('.site-header');
navToggle && navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  document.body.classList.toggle('nav-open');
});

// Fill footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple lightbox for gallery images
const galleryBtns = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lbImage = lightbox?.querySelector('.lb-image');
const lbCaption = lightbox?.querySelector('.lb-caption');
const lbClose = lightbox?.querySelector('.lb-close');

function openLightbox(src, alt){
  if(!lightbox) return;
  lbImage.src = src;
  lbImage.alt = alt || '';
  lbCaption.textContent = alt || '';
  lightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(){
  if(!lightbox) return;
  lightbox.setAttribute('aria-hidden','true');
  lbImage.src = '';
  lbImage.alt = '';
  document.body.style.overflow = '';
}

galleryBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const src = btn.dataset.src || btn.querySelector('img')?.src;
    const alt = btn.querySelector('img')?.alt || '';
    openLightbox(src, alt);
  });
});

lbClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
  if(e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeLightbox();
});