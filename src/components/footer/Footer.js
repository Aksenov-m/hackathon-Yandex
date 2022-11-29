import { h } from "preact";
import ButtonLink from "../buttonLink/buttonLink";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer class="footer">
      <ButtonLink href="#greetings" Class="footer__scroll-to-top"  >
      <i class="scroll-to-top" />
      </ButtonLink>
      <div class="footer__reference">
        <div class="footer__social">
          <Logo />
          <nav class="footer__links">
            <ul class="footer__list">
              <li class="footer__row">
                <a
                  class="footer__link"
                  href="https://thecode.media/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Перейти в Блог"
                >
                  Журнал
                </a>
              </li>
              <li class="footer__row">
                <a
                  class="footer__link"
                  href="https://vk.com/yandex.practicum"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Перейти в группу ВКонтакте"
                >
                  <i class="footer__logo vk" />
                </a>
              </li>
              <li class="footer__row">
                <a
                  class="footer__link"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="footer__logo telegram" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav class="footer__menu">
          <ul class="footer__content">
            <li>
              <a
                class="footer__link"
                href="https://yandex.ru/support/praktikum/feedback.html"
                target="_blank"
                rel="noreferrer"
              >
                Помощь
              </a>
            </li>
            <li>
              <a
                class="footer__link"
                href="https://code.s3.yandex.net/License%20YSDA.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Лицензия
              </a>
            </li>
            <li>
              <a
                class="footer__link"
                href="https://yandex.ru/legal/praktikum_termsofuse/"
                target="_blank"
                rel="noreferrer"
              >
                Правовая информация
              </a>
            </li>
            <li>
              <a
                class="footer__link"
                href="https://practicum.yandex.ru/promo/hr_landing_1#marketing"
                target="_blank"
                rel="noreferrer"
              >
                Вакансии
              </a>
            </li>
            <li>
              <a
                class="footer__link"
                href="https://praktikum.yandex.ru/employment"
                target="_blank"
                rel="noreferrer"
              >
                Для работадателей
              </a>
            </li>
            <li>
              <a
                class="footer__link"
                href="https://practicum.yandex.ru/reviews"
                target="_blank"
                rel="noreferrer"
              >
                Отзывы
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__phone">
        <a href="tel:8-800-700-93-29" class="footer__phone-link">
          8-800-700-93-29
        </a>
        <p class="footer__phone-description">Звонок по России бесплатный</p>
      </div>
      <div class="footer__text">
        <span class="footer__copyright">
          &copy;2022 АНО ДПО «ШАД», ООО «Яндекс»
        </span>
        <div class="footer__info">
          <span class="footer__info-item">
            <p class="paragraph">
              Информация на данной странице описывает возможные варианты
              получения дополнительного дохода в месяц (т.н. подработка). Не
              является предложением о работе. Размещенные объявления о
              потребности в тех или иных услугах не являются вакансиями.
            </p>
          </span>
          <span class="footer__info-item">
            <p class="paragraph">
              Образовательные услуги оказываются АНО ДПО «ШАД». ШАД — это Школа
              анализа данных, основанная Яндексом и оказывающая образовательные
              услуги на основании Лицензии № 036031 от 24 марта 2015 года.
            </p>
          </span>
          <span class="footer__info-item">
            <p class="paragraph">
              Сертификат о прохождении обучения по программе дополнительного
              профессионального образования также выдается АНО ДПО «ШАД».
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
