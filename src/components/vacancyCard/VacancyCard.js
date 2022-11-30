import { h } from 'preact';

const VacancyCard = ({text,views,newStyle,link}) => (
	<article class = {`vacancy-card ${newStyle ? 'vacancy-card_clicked' : ''}`}>
    <a href='#' class='vacancy-card__share' />
      <h3 class='vacancy-card__title'>{text}</h3>
		  <p class='vacancy-card__amount'>8-12 часов в неделю</p>
      <p class='vacancy-card__amount'>В среднем 35 тыс.руб в месяц</p>
      <div class='vacancy-card__box'>
        <a class='vacancy-card__button' href={link} rel='noreferrer'target="_blank">Откликнуться</a>
        <div class='vacancy-card__views'>{views}</div>
        <a class='vacancy-card__link vacancy-card__button' rel='noreferrer'target="_blank">Подробнее</a>
      </div>
	</article>
);

export default VacancyCard;
