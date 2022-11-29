//import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
//import 'swiper/swiper.css'; // core Swiper
//import 'swiper/modules/navigation/navigation.scss'; // Navigation module
//import 'swiper/modules/pagination/pagination.scss'; // Pagination module
//import 'swiper/css/scrollbar/scrollbar.scss';
import 'swiper/swiper-bundle.min.css';
import StoriesCard from '../StoriesCard/StoriesCard'

export default () => {
  return (
    <Swiper
      // install Swiper modules
      spaceBetween={30}
      slidesPerView={3.2}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><StoriesCard /></SwiperSlide>
      <SwiperSlide><StoriesCard /></SwiperSlide>
      <SwiperSlide><StoriesCard /></SwiperSlide>
      <SwiperSlide><StoriesCard /></SwiperSlide>
      ...
    </Swiper>
  );
};
