/* =========================================================
   DESA WISATA TEGALREJO — MAIN SCRIPT
   ========================================================= */

var WHATSAPP_NUMBER = '6281230965657';

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Navbar berubah solid saat discroll ---------- */
  var navbar = document.querySelector('.navbar-tegalrejo');
  if (navbar && !navbar.classList.contains('navbar-solid')) {
    var onScrollNav = function () {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScrollNav);
    onScrollNav();
  }

  /* ---------- Tutup menu mobile otomatis setelah klik link ---------- */
  var navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  var collapseEl = document.querySelector('.navbar-collapse');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (collapseEl && collapseEl.classList.contains('show')) {
        var bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseEl);
        bsCollapse.hide();
      }
    });
  });

  /* ---------- Tombol Back to Top ---------- */
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Reveal animasi saat elemen masuk viewport ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Tandai menu aktif sesuai halaman saat ini ---------- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  /* ---------- Tombol WhatsApp mengambang + ikon WA di footer ---------- */
  var waLinkFinal = 'https://wa.me/' + WHATSAPP_NUMBER +
    '?text=' + encodeURIComponent('Halo, saya ingin bertanya tentang Desa Wisata Tegalrejo.');

  var waFloat = document.getElementById('waFloatBtn');
  if (waFloat) { waFloat.href = waLinkFinal; }

  var waFooter = document.getElementById('footerWaLink');
  if (waFooter) { waFooter.href = waLinkFinal; }

});
