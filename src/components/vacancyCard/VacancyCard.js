import { h } from 'preact';
import PopupResponseVacancy from '../PopupResponseVacancy/PopupResponseVacancy';

const VacancyCard = ({text,views,newStyle,link, isOpen, onClose, stopPropagation,openPopup}) => (
	<article class = {`vacancy-card ${newStyle ? 'vacancy-card_clicked' : ''}`}>
    <a href='https://t.me/share/url?url=https%3A%2F%2Fyandex.ru%2Fdev%2Fshare%2F&text=%D0%91%D0%BB%D0%BE%D0%BA%20%C2%AB%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%C2%BB%20%E2%80%94%20%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8%20%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%B0&utm_source=share2' class='vacancy-card__share' />
      <h3 class='vacancy-card__title'>{text}</h3>
		  <p class='vacancy-card__amount'>8-12 часов в неделю</p>
      <p class='vacancy-card__amount'>В среднем 35 тыс.руб в месяц</p>
      <div class='vacancy-card__box'>
        <button class='vacancy-card__button' onclick={openPopup}>Откликнуться</button>
        <div class='vacancy-card__views'>{views}</div>
        <a class='vacancy-card__link vacancy-card__button' href={link} rel='noreferrer'target="_blank">Подробнее</a>
      </div>
      <PopupResponseVacancy
        isOpen={isOpen}
        onClose={onClose}
        stopPropagation={stopPropagation}
      />
	</article>
);

export default VacancyCard;
