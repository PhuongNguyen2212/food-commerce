/* =============================================================
   navigation.js — Chuyển trang (SPA), navbar đổi màu khi cuộn,
   và menu mobile (hamburger + overlay).
   ============================================================= */

// Chuyển sang một view: 'home' | 'product' | 'cart' | 'checkout'.
function go(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === view));
  closeMenu();
  window.scrollTo({ top:0, behavior:'smooth' });
  if (view === 'cart')     renderCart();
  if (view === 'checkout') renderCheckout();
  setTimeout(initReveal, 50);
}

// --- Navbar đổi màu khi cuộn ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30));

// --- Menu mobile ---
const navLinks = document.getElementById('navLinks');
const overlay  = document.getElementById('navOverlay');
function openMenu()  { navLinks.classList.add('open');    overlay.classList.add('show'); }
function closeMenu() { navLinks.classList.remove('open'); overlay.classList.remove('show'); }

document.getElementById('hamburger').addEventListener('click',
  () => navLinks.classList.contains('open') ? closeMenu() : openMenu());
overlay.addEventListener('click', closeMenu);
