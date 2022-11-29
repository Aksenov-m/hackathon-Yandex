import { h } from 'preact';

const HowBeExpert = () => (
  <section class ="how-become app__margins">
    <div class ="how-become__box">
      <div class='how-become__group'>
        <h2 class="how-become__title">Как стать экспертом?</h2>
        <ul class="how-become__list">
          <li class="how-become__item">
            <p class='how-become__item-text'>1. Выберите роль и заполните заявку</p>
          </li>
          <li class="how-become__item">
            <p class='how-become__item-text'>2. Пройдите отбор и бесплатное обучение</p>
          </li>
          <li class="how-become__item">
            <p class='how-become__item-text'>3. Начните делиться знаниями со студентами Яндекс Практикума</p>
          </li>
        </ul>
      </div>
      <div class='how-become__picture' />
    </div>
  </section>
);

export default HowBeExpert;
