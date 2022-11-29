import { h } from 'preact';

const StoriesCard = () => (
	<article class ="stories-card slider__img">
    <div class="stories-card__box">
      <img class="stories-card__picture" src="../../images/expertpic.jpg" />
      <p class="stories-card__about">Зоя Король, наставница на QA-факультете</p>
      <p class="stories-card__text">Я - свитчер, путь в тестирование был очень долгим (по образованию я редактор). Но главное, что я наконец-то нашла себя. Мне безумно нравится делиться знаниями, а еще больше радуюсь, когда мои наставляемые находят работу и успешно проходят испыталку.</p>
    </div>
	</article>
);

export default StoriesCard;
