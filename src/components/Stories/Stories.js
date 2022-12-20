import { h } from 'preact';
import SwiperStories from '../Swiper/SwiperStories';
import {STORIES_SLIDES} from '../../utils/constantsVacancies.js'

const Stories = () => (
	<article class ="stories">
    <div class="stories__box">
      <h2 class="stories__title">Истории наших специалистов</h2>
      <p class="stories__about">Яндекс Практикум - это сообщество людей, увлеченных общим делом. Наши эксперты делятся своим опытом и рассказывают свои истории.</p>
      {/*<Swiper />*/}
      <SwiperStories slides={STORIES_SLIDES} />
    </div>
	</article>
);

export default Stories;
