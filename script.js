const triggers = document.querySelectorAll(`.js-scroll`);
triggers.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    const target = document.querySelector(btn.dataset.target);
    if (!target) return;
    const offset = 72;
    const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: `smooth` });
  });
});

const form = document.querySelector(`form`);
if (form) {
  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const submit = form.querySelector(`button[type=submit]`);
    if (!submit) return;
    const text = submit.textContent;
    submit.textContent = `Спасибо, мы свяжемся с вами`;
    submit.disabled = true;
    setTimeout(() => {
      submit.textContent = text;
      submit.disabled = false;
      form.reset();
    }, 2200);
  });
}
