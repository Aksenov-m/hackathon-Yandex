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
      /*slidesPerView={1}
      slidesPerGroup={1}*/
      slidesPerView= {'auto'}
      /*centeredSlides={true}*/
      loop={true}
      centerInsufficientSlides={true}
      breakpoints={{
        /*614: {
          slidesPerView: 1,
          //slidesPerView: 2.2,
          spaceBetween: 35,
          //navigation: false,
        },
        800: {
          slidesPerView: 2,
          //slidesPerView: 2.2,
          spaceBetween: 35,
          //navigation: false,
        },*/
        1200: {
          slidesPerView: 3,
          /*slidesPerGroup: 3,*/
          /*spaceBetween: 35,*/
          //navigation: false,
          centeredSlides: false,
          /*centeredSlidesBounds: true,*/
          grabCursor: true,
        },
      }}
    >
    <div class="slider_slide-box">
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
