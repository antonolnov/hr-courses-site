"use client";

import { useState } from "react";
import styles from "./WorkHereEducationLanding.module.css";

const audience = [
  {
    title: "Начинающие рекрутеры",
    text: "Освоите поиск, интервью, офферы и работу с воронкой, чтобы уверенно закрывать вакансии с нуля.",
  },
  {
    title: "HR-специалисты",
    text: "Усилите адаптацию, удержание и метрики, чтобы влиять на бизнес-результат, а не только на операционные задачи.",
  },
  {
    title: "Переход в HR",
    text: "Соберете профиль компетенций и портфолио, чтобы перейти в новую роль без лишней теории.",
  },
  {
    title: "Руководители",
    text: "Выстроите системный HR-подход в команде: от найма до управляемых HR-метрик.",
  },
];

const programs = [
  {
    title: "HR Start",
    text: "Пошаговый вход в профессию: рекрутинг, адаптация, коммуникация с бизнесом и базовая аналитика.",
  },
  {
    title: "Recruiter Pro",
    text: "Ускорение найма: sourcing, интервью по компетенциям, автоматизация и качество офферов.",
  },
  {
    title: "HR Lead Track",
    text: "Для роста в роли HR Lead: people analytics, удержание, performance и HR-бренд.",
  },
];

const faqs = [
  {
    question: "Сколько длится обучение?",
    answer:
      "Средняя длительность программ 6-12 недель, при этом вы учитесь в гибком графике и проходите модули в удобном темпе.",
  },
  {
    question: "Нужен ли опыт?",
    answer: "Нет, можно стартовать с нуля: мы даем базу, пошаговую практику и поддержку экспертов на каждом этапе.",
  },
  {
    question: "Какой документ я получу?",
    answer: "После завершения вы получите диплом государственного образца и документ о прохождении программы.",
  },
  {
    question: "Как выбрать программу?",
    answer: "Перейдите в раздел программ и оставьте заявку на консультацию - поможем подобрать трек по вашему опыту и карьерной цели.",
  },
  {
    question: "Можно ли совмещать с работой?",
    answer: "Да, обучение рассчитано на занятых специалистов: достаточно 5-7 часов в неделю в удобном для вас расписании.",
  },
];

export default function WorkHereEducationLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Практическое обучение в HR и рекрутменте</p>
          <h1>Выйдите на новый уровень в HR за 6-12 недель с практикой на реальных кейсах</h1>
        <p className={styles.lead}>
          Реальные кейсы, портфолио, поддержка экспертов и карьерный трек, который дает измеримый результат.
        </p>
          <div className={styles.actions}>
            <a className={styles.btn} href="#consultation">Подобрать программу</a>
            <a className={styles.btnGhost} href="#consultation">Получить консультацию</a>
          </div>
          <ul className={styles.badges}>
            <li>4,9/5 средняя оценка программ</li>
            <li>Диплом государственного образца</li>
            <li>Практика с экспертной обратной связью</li>
          </ul>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>Почему WorkHere</p>
        <h2>Рынок меняется быстрее классического образования</h2>
        <div className={styles.grid3}>
          <article className={styles.card}><h3>Рынок требует скорость</h3><p>HR-функция стала бизнес-критичной и требует быстрых решений.</p></article>
          <article className={styles.card}><h3>Классический подход устарел</h3><p>Теория без практики не помогает пройти интервью и внедрить процессы.</p></article>
          <article className={styles.card}><h3>Преимущество WorkHere</h3><p>Кейсы компаний, проверка практики и карьерная поддержка до результата.</p></article>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <p className={styles.eyebrow}>Для кого</p>
        <h2>Выберите точку старта</h2>
        <div className={styles.grid4}>
          {audience.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>Результаты</p>
        <h2>Вы получаете рабочую систему, а не только теорию</h2>
        <ul className={styles.checklist}>
          <li>Практические навыки для реальных задач</li>
          <li>Разбор кейсов и типовых ошибок</li>
          <li>Современные инструменты и метрики</li>
          <li>Карьерная траектория роста</li>
          <li>Диплом государственного образца</li>
        </ul>
      </section>

      <section className={styles.sectionAlt}>
        <p className={styles.eyebrow}>Формат</p>
        <h2>Как проходит обучение</h2>
        <div className={styles.grid2}>
          <article className={styles.card}><h3>Диагностика целей</h3><p>Определяем уровень и фокус программы.</p></article>
          <article className={styles.card}><h3>Практика на кейсах</h3><p>В каждом модуле задания с применением в работе.</p></article>
          <article className={styles.card}><h3>Поддержка экспертов</h3><p>Кураторы и сообщество помогают довести задачи до результата.</p></article>
          <article className={styles.card}><h3>Гибкий график</h3><p>Средняя длительность 6-12 недель в удобном темпе.</p></article>
        </div>
        <div className={styles.actions}>
          <a className={styles.btn} href="#consultation">Получить консультацию по формату</a>
          <a className={styles.btnGhost} href="#programs">Перейти к программам</a>
        </div>
      </section>

      <section className={styles.section} id="programs">
        <p className={styles.eyebrow}>Программы</p>
        <h2>Выберите программу под вашу задачу</h2>
        <div className={styles.grid3}>
          {programs.map((program) => (
            <article key={program.title} className={styles.card}>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <div className={styles.actions}>
                <a className={styles.btnGhost} href="#consultation">Подробнее</a>
                <a className={styles.btn} href="#consultation">Подобрать программу</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <p className={styles.eyebrow}>Социальное доказательство</p>
        <h2>Результаты выпускников и доверие HR-сообщества</h2>
        <div className={styles.grid3}>
          <article className={styles.card}><strong>6-12 недель</strong><p>средняя длительность треков до карьерного результата</p></article>
          <article className={styles.card}><strong>300+</strong><p>компаний в HR-комьюнити WorkHere</p></article>
          <article className={styles.card}><strong>4,9/5</strong><p>средняя оценка программ</p></article>
        </div>
      </section>

      <section className={styles.section} id="faq">
        <p className={styles.eyebrow}>FAQ</p>
        <h2>Частые вопросы</h2>
        <div className={styles.faqList}>
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <article key={item.question} className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  {item.question}
                </button>
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.sectionAlt} id="consultation">
        <p className={styles.eyebrow}>Финальный шаг</p>
        <h2>Получите персональный план развития на консультации</h2>
        <form className={styles.form}>
          <label>Имя<input required type="text" name="name" /></label>
          <label>Контакт<input required type="text" name="contact" /></label>
          <label>Цель<textarea required name="goal" rows={4} /></label>
          <button className={styles.btn} type="submit">Записаться на консультацию</button>
        </form>
      </section>

      <div className={styles.stickyCta}>
        <p>Готовы ускорить карьеру в HR?</p>
        <a className={styles.btn} href="#consultation">Подобрать программу</a>
      </div>
    </div>
  );
}
