
emailjs.init("duYdo4il5IOkPGPS_");

const form = document.querySelector(".contactForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  emailjs.sendForm(
    "service_jqw2bwb",
    "template_u4u5xai",
    this   // 👉 le formulaire
  )
  .then(function(){
      alert("Message envoyé avec succès ✅");
      form.reset(); // vide le formulaire après envoi
  })
  .catch(function(error){
      console.log(error);
      alert("Erreur ❌");
  });

});
// ===============================
// 1️⃣ THÈME SOMBRE / CLAIR
// ===============================
function toggleTheme() {
  const body = document.body;
  const themeButton = document.querySelector('.theme-toggle');

  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    themeButton.innerHTML = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeButton.innerHTML = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Charger le thème sauvegardé
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const themeButton = document.querySelector('.theme-toggle');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeButton.innerHTML = '☀️';
  } else {
    themeButton.innerHTML = '🌙';
  }
});


// ===============================
// 2️⃣ NAVIGATION FLUIDE
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ===============================
// 3️⃣ EFFET NAVBAR AU SCROLL
// ===============================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.barre');

  if (!navbar) return;

  if (window.scrollY > 80) {
    navbar.style.boxShadow = '0 6px 14px rgba(0,0,0,0.2)';
  } else {
    navbar.style.boxShadow = 'var(--card-shadow)';
  }
});


// ===============================
// 4️⃣ ANIMATION DES CARTES SERVICES
// ===============================
const serviceCards = document.querySelectorAll('.set-item');

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

serviceCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = '0.6s ease';
  cardObserver.observe(card);
});


// ===============================
// 5️⃣ GESTION DU FORMULAIRE CONTACT
// ===============================
// Le formulaire est géré par EmailJS (lignes 1-24)

// ===============================
// 6️⃣ MESSAGE CONSOLE
// ===============================
console.log(
  '%c🎉 Bienvenue sur le portfolio de Cheick Abdoul Kader DAO',
  'font-size:18px;color:#0066cc;font-weight:bold;'
);
console.log(
  '%cHTML • CSS • JavaScript • Ubuntu • GitHub Pages',
  'font-size:14px;color:#6c757d;'
);
