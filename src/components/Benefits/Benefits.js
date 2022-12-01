import { h } from 'preact';
import BenefitCard from '../BenefitCard/BenefitCard';
import SwiperBenefits from '../Swiper/SwiperBenefits'

const Benefits = () => (
	<section class ="benefits" id='benefits'>
    <div class ="benefits__box">
      <h2 class ="benefits__title">С нами интересно и полезно</h2>
      <ul class='benefits__list'>
        <BenefitCard title={`Менять жизнь людей к\u00A0лучшему`} about={'Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться'} style={'benefits__icon_1'} />
        <BenefitCard title={`Учиться новому и\u00A0развиваться`} about={'Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей'} style={'benefits__icon_2'} />
        <BenefitCard title={'Развивать личный бренд'} about={'Публикуйте статьи в нашем блоге и выступайте на мероприятиях, чтобы как можно больше людей узнали о вас как об эксперте'} style={'benefits__icon_3'} />
        <BenefitCard title={'Oбщаться с людьми из\u00A0EdTech'} about={'Cтанете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри'} style={'benefits__icon_4'} />
        <BenefitCard title={'Иметь доход от 35 до 50 тыс ₽ в месяц'} about={'Удаленно, 2–3 часа в день, график выбираете сами'} style={'benefits__icon_5'} />
        <BenefitCard title={'Расти внутри своей роли'} about={'Вы сможете стать старшим наставником или сеньор-ревьювером'} style={'benefits__icon_6'} />
      </ul>
      <div class='benefits__slider'>
        <SwiperBenefits />
      </div>
    </div>
	</section>
);

export default Benefits;
