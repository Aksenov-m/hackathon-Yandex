import { h } from 'preact';
//import PopupResponseVacancy from '../PopupResponseVacancy/PopupResponseVacancy';

const VacancyCard = ({text,views,newStyle,link, openPopup}) => (
	<article class = {`vacancy-card ${newStyle ? 'vacancy-card_clicked' : ''}`}>
    <a href='https://telegram.me/share/url?url=https://aksenov-m.github.io/hackathon-Yandex/#vacancies&amp;text=Вакансии' class='vacancy-card__share_mobile vacancy-card__share' />
      <h3 class='vacancy-card__title'>{text}</h3>
		  <p class='vacancy-card__amount'>8-12 часов в неделю</p>
      <p class='vacancy-card__amount'>В среднем 35 тыс.руб в месяц</p>
      <div class='vacancy-card__box'>
        <button class='vacancy-card__button' onclick={openPopup}>Откликнуться</button>
        <div class='vacancy-card__views'>{views}</div>
        <a class='vacancy-card__link vacancy-card__button' href={link} rel='noreferrer'target="_blank">Подробнее</a>
      </div>
	</article>
);

export default VacancyCard;
