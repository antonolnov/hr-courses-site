const scrollLinks = document.querySelectorAll('[data-scroll]');
const pageHeader = document.querySelector('.header');
const stickyCta = document.querySelector('.sticky-cta');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    const offset = pageHeader ? pageHeader.offsetHeight + 8 : 72;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const trigger = item.querySelector('.faq-question');
  if (!trigger) return;
  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    faqItems.forEach((other) => {
      other.classList.remove('open');
      const otherTrigger = other.querySelector('.faq-question');
      if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

const demoForms = document.querySelectorAll('.js-demo-form');
demoForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = form.querySelector('button[type=submit]');
    if (!submitButton) return;
    const initialText = submitButton.textContent;
    submitButton.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время';
    submitButton.disabled = true;
    setTimeout(() => {
      submitButton.textContent = initialText;
      submitButton.disabled = false;
      form.reset();
    }, 2600);
  });
});

function updateHeaderState() {
  if (!pageHeader) return;
  pageHeader.classList.toggle('is-scrolled', window.scrollY > 10);
}

function updateStickyCtaState() {
  if (!stickyCta) return;
  const triggerPoint = Math.max(window.innerHeight * 0.45, 280);
  stickyCta.classList.toggle('is-visible', window.scrollY > triggerPoint);
}

window.addEventListener('scroll', updateHeaderState, { passive: true });
window.addEventListener('scroll', updateStickyCtaState, { passive: true });
window.addEventListener('resize', updateStickyCtaState);
updateHeaderState();
updateStickyCtaState();

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add('is-visible'));
}
