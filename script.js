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

const leadModal = document.querySelector('#lead-modal');
const modalOpeners = document.querySelectorAll('.js-open-lead-modal');

if (leadModal && modalOpeners.length) {
  const modalProgramLabel = leadModal.querySelector('#modal-program-label');
  const modalProgramInput = leadModal.querySelector('#modal-program');
  const modalContactInput = leadModal.querySelector('#modal-contact');
  const modalClosers = leadModal.querySelectorAll('[data-close-modal]');
  let lastFocusedElement = null;

  function getFocusableElements() {
    return leadModal.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input:not([disabled]), select, [tabindex]:not([tabindex="-1"])'
    );
  }

  function openLeadModal(programName) {
    lastFocusedElement = document.activeElement;
    if (modalProgramLabel) {
      modalProgramLabel.textContent = programName || 'Программа Workhere Academy';
    }
    if (modalProgramInput) {
      modalProgramInput.value = programName || 'Программа Workhere Academy';
    }
    leadModal.classList.add('is-open');
    leadModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    window.setTimeout(() => {
      if (modalContactInput) modalContactInput.focus();
    }, 30);
  }

  function closeLeadModal() {
    leadModal.classList.remove('is-open');
    leadModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  modalOpeners.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      openLeadModal(trigger.dataset.program || 'Программа Workhere Academy');
    });
  });

  modalClosers.forEach((button) => {
    button.addEventListener('click', closeLeadModal);
  });

  document.addEventListener('keydown', (event) => {
    if (!leadModal.classList.contains('is-open')) return;
    if (event.key === 'Escape') {
      closeLeadModal();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = getFocusableElements();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

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
