import { h } from 'preact';
import BenefitCard from '../BenefitCard/BenefitCard';
import SwiperBenefits from '../Swiper/SwiperBenefits'

const Benefits = () => (
	<section class ="benefits app__margins">
    <div class ="benefits__box">
      <h2 class ="benefits__title">С нами интересно и полезно</h2>
      <ul class='benefits__list'>
        <BenefitCard title={'Менять жизнь людей к лучшему'} about={'Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться'} />
        <BenefitCard title={'Учиться новому'} about={'Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей'} />
        <BenefitCard title={'Развивать личный бренд'} about={'Публикуйте статьи в нашем блоге и выступайте на мероприятиях, чтобы как можно больше людей узнали о вас как об эксперте'} />
        <BenefitCard title={'Oбщаться с людьми из EdTech'} about={'Cтанете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри'} />
        <BenefitCard title={'Иметь доход от 35 до 50 тысяч ₽ в месяц'} about={'Удаленно, 2–3 часа в день, график выбираете сами'} />
        <BenefitCard title={'Менять жизнь людей к лучшему'} about={'вы сможете стать старшим наставником или сеньор-ревьювером'} />
      </ul>
      <div class='benefits__slider'>
        <SwiperBenefits />
      </div>
    </div>
	</section>
);

export default Benefits;
