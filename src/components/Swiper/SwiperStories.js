//import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
//import 'swiper/swiper.css'; // core Swiper
//import 'swiper/modules/navigation/navigation.scss'; // Navigation module
//import 'swiper/modules/pagination/pagination.scss'; // Pagination module
//import 'swiper/css/scrollbar/scrollbar.scss';
import StoriesCard from '../StoriesCard/StoriesCard';
import { Navigation } from "swiper";
//import 'swiper/swiper-bundle.min.css';

// eslint-disable-next-line react/display-name
export default () => {
  return (
  <div class="slider__box">
    <Swiper
      // install Swiper modules
      navigation={true}
      modules={[Navigation]}
      spaceBetween={35}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        /*500: {
          slidesPerView: 1.4,
          //spaceBetween: 10,
        },*/
        600: {
          slidesPerView: 2,
          //spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          //navigation: false,
          spaceBetween: 35,
        },
        1100: {
          slidesPerView: 2,
          //slidesPerView: 2.2,
          spaceBetween: 35,
          //navigation: false,
        },
        1200: {
          slidesPerView: 2,
          //slidesPerView: 2.2,
          spaceBetween: 35,
          //navigation: false,
        },
        1390: {
          slidesPerView: 3,
          spaceBetween: 35,
          //navigation: false,
        },
      }}
    >
    <div class="slider_slide-box swiper-wrapper">
      <SwiperSlide>
        <StoriesCard />
      </SwiperSlide>
      <SwiperSlide>
        <StoriesCard />
      </SwiperSlide>
      <SwiperSlide>
        <StoriesCard />
      </SwiperSlide>
      <SwiperSlide>
        <StoriesCard />
      </SwiperSlide>
    </div>
    </Swiper>
  </div>
  );
};
