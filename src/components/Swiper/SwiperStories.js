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
    <Swiper
      // install Swiper modules
      navigation={true}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        /*500: {
          slidesPerView: 1.4,
          //spaceBetween: 10,
        },*/
        600: {
          slidesPerView: 2.2,
          //spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.3,
          //navigation: false,
          //spaceBetween: 10,
        },
        1100: {
          slidesPerView: 2.5,
          //slidesPerView: 2.2,
          //spaceBetween: 10,
          //navigation: false,
        },
        1200: {
          slidesPerView: 2.8,
          //slidesPerView: 2.2,
          //spaceBetween: 10,
          //navigation: false,
        },
        1390: {
          slidesPerView: 3.2,
          //spaceBetween: 10,
          //navigation: false,
        },
      }}
    >
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
    </Swiper>
  );
};
