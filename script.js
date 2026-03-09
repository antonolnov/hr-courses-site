const scrollLinks = document.querySelectorAll(`[data-scroll]`);
const pageHeader = document.querySelector(`.header`);

const heroProofData = {
  title: `Кейс выпускницы`,
  story:
    `Марина пришла без опыта в подборе, собрала портфолио на реальных кейсах и уже во время обучения смогла увереннее проходить собеседования на HR-позиции.`,
  metricOne: `3 приглашения`,
  metricTwo: `+32%`,
  note: `Это займет до 2 минут. Без оплаты и без обязательств.`
};

function applyHeroProofData() {
  const title = document.getElementById(`hero-proof-title`);
  const story = document.getElementById(`hero-proof-story`);
  const metricOne = document.getElementById(`hero-proof-metric-1`);
  const metricTwo = document.getElementById(`hero-proof-metric-2`);
  const note = document.getElementById(`hero-proof-note`);

  if (title) title.textContent = heroProofData.title;
  if (story) story.textContent = heroProofData.story;
  if (metricOne) metricOne.textContent = heroProofData.metricOne;
  if (metricTwo) metricTwo.textContent = heroProofData.metricTwo;
  if (note) note.textContent = heroProofData.note;
}

applyHeroProofData();

scrollLinks.forEach((link) => {
  link.addEventListener(`click`, (event) => {
    const href = link.getAttribute(`href`);
    if (!href || !href.startsWith(`#`)) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    const offset = 74;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: `smooth` });
  });
});

const faqItems = document.querySelectorAll(`.faq-item`);

faqItems.forEach((item) => {
  const trigger = item.querySelector(`.faq-question`);
  if (!trigger) return;

  trigger.addEventListener(`click`, () => {
    const isOpen = item.classList.contains(`open`);

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove(`open`);
      const otherTrigger = otherItem.querySelector(`.faq-question`);
      if (otherTrigger) {
        otherTrigger.setAttribute(`aria-expanded`, `false`);
      }
    });

    if (!isOpen) {
      item.classList.add(`open`);
      trigger.setAttribute(`aria-expanded`, `true`);
    }
  });
});

const demoForms = document.querySelectorAll(`.js-demo-form`);

demoForms.forEach((demoForm) => {
  demoForm.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const submitButton = demoForm.querySelector(`button[type="submit"]`);
    if (!submitButton) return;

    const initialText = submitButton.textContent;
    submitButton.textContent = `Спасибо! Мы свяжемся с вами в ближайшее время`;
    submitButton.disabled = true;

    setTimeout(() => {
      submitButton.textContent = initialText;
      submitButton.disabled = false;
      demoForm.reset();
    }, 2600);
  });
});

const reveals = document.querySelectorAll(`.reveal`);
const stickyCta = document.querySelector(`.sticky-cta`);

function updateStickyCtaVisibility() {
  if (!stickyCta) return;

  const triggerPoint = Math.max(window.innerHeight * 0.4, 260);
  const shouldShow = window.scrollY > triggerPoint;
  stickyCta.classList.toggle(`is-visible`, shouldShow);
}

function updateHeaderState() {
  if (!pageHeader) return;
  pageHeader.classList.toggle(`is-scrolled`, window.scrollY > 10);
}

window.addEventListener(`scroll`, updateStickyCtaVisibility, { passive: true });
window.addEventListener(`scroll`, updateHeaderState, { passive: true });
window.addEventListener(`resize`, updateStickyCtaVisibility);
updateStickyCtaVisibility();
updateHeaderState();

if (`IntersectionObserver` in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`is-visible`);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((section) => observer.observe(section));
} else {
  reveals.forEach((section) => section.classList.add(`is-visible`));
}
