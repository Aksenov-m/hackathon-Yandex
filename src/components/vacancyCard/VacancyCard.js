import { h } from 'preact';

const VacancyCard = ({text}) => (
	<div class ="vacancy-card">
    <a href='#' class='vacancy-card__share' />
      <h3 class='vacancy-card__title'>{text}</h3>
		  <p class='vacancy-card__amount'>Сейчас на курсе работает 10 наставников</p>
      <div class='vacancy-card__box'>
        <button class='vacancy-card__button'>Откликнуться</button>
        <div class='vacancy-card__views'>76</div>
      </div>
	</div>
);

export default VacancyCard;
