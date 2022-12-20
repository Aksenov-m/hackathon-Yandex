import { h } from 'preact';

const StoriesCard = ({title,subtitle,picture}) => (
	<article class ="stories-card slider__img">
    <div class="stories-card__box">
      {/*<img class="stories-card__picture" src="../../images/expertpic.jpg" />*/}
      <div class={`${picture} stories-card__picture`} />
      <p class="stories-card__about">{title}</p>
      <p class="stories-card__text">{subtitle}</p>
    </div>
	</article>
);

export default StoriesCard;
