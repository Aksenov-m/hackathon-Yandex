import { h } from 'preact';

const VacancyCard = ({text}) => (
	<article class ="vacancy-card">
    <a href='#' class='vacancy-card__share' />
      <h3 class='vacancy-card__title'>{text}</h3>
		  <p class='vacancy-card__amount'>8-12 часов в неделю</p>
      <p class='vacancy-card__amount'>В среднем 35 тыс. в месяц</p>
      <div class='vacancy-card__box'>
        <button class='vacancy-card__button'>Откликнуться</button>
        <div class='vacancy-card__views'>76</div>
      </div>
	</article>
);

export default VacancyCard;
