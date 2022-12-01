import {Pagination} from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
//import 'swiper/swiper.css'; // core Swiper
//import 'swiper/modules/navigation/navigation.scss'; // Navigation module
//import 'swiper/modules/pagination/pagination.scss'; // Pagination module
//import 'swiper/css/scrollbar/scrollbar.scss';
import 'swiper/swiper-bundle.min.css';
import BenefitCard from '../BenefitCard/BenefitCard';

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Swiper class="swiper-benefits"
      // install Swiper modules
      spaceBetween={10}
      centeredSlides={true}
      centerInsufficientSlides={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
        <SwiperSlide>
          <div class="swiper__slide">
            <BenefitCard
            style={'benefits__icon_1'}
            title={'Менять жизнь людей к лучшему'}
            about={'Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться'} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="swiper__slide">
            <BenefitCard
            style={'benefits__icon_2'}
            title={'Учиться новому'}
            about={'Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей'} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="swiper__slide">
            <BenefitCard
            style={'benefits__icon_3'}
            title={'Развивать личный бренд'}
            about={'Публикуйте статьи в нашем блоге и выступайте на мероприятиях, чтобы как можно больше людей узнали о вас как об эксперте'} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="swiper__slide">
            <BenefitCard
            style={'benefits__icon_4'}
            title={'Oбщаться с людьми из EdTech'}
            about={'Cтанете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри'} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="swiper__slide">
            <BenefitCard
            style={'benefits__icon_5'}
            title={'Получать 35-50 тыс. ₽ в месяц'}
            about={'Удаленно, 2–3 часа в день, график выбираете сами'} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="swiper__slide">
            <BenefitCard
            style={'benefits__icon_6'}
            title={'Расти внутри своей роли'}
            about={'Вы сможете стать старшим наставником или сеньор-ревьюером'} />
          </div>
        </SwiperSlide>
    </Swiper>
  );
};
