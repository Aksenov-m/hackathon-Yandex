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

export default () => {
  return (
    <Swiper
      // install Swiper modules
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
          <BenefitCard title={'Менять жизнь людей к лучшему'} about={'Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться'} />
        </SwiperSlide>

        <SwiperSlide>
          <BenefitCard title={'Учиться новому'} about={'Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей'} />
        </SwiperSlide>

        <SwiperSlide>
          <BenefitCard title={'Развивать личный бренд'} about={'Публикуйте статьи в нашем блоге и выступайте на мероприятиях, чтобы как можно больше людей узнали о вас как об эксперте'} />
        </SwiperSlide>

        <SwiperSlide>
          <BenefitCard title={'Oбщаться с людьми из EdTech'} about={'Cтанете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри'} />
        </SwiperSlide>

        <SwiperSlide>
          <BenefitCard title={'Иметь доход от 35 до 50 тысяч ₽ в месяц'} about={'Удаленно, 2–3 часа в день, график выбираете сами'} />
        </SwiperSlide>

        <SwiperSlide>
        <BenefitCard title={'Менять жизнь людей к лучшему'} about={'вы сможете стать старшим наставником или сеньор-ревьювером'} />
        </SwiperSlide>
    </Swiper>
  );
};
