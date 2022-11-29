import { h } from 'preact';
import Swiper from '../Swiper/Swiper';

const Stories = () => (
	<article class ="stories">
    <div class="stories__box">
      <h2 class="stories__title">Истории наших специалистов</h2>
      <p class="stories__about">Яндекс Практикум - это сообщество людей, увлеченных общим делом. Наши эксперты делятся своим опытом и рассказывают свои истории.</p>
      {/*<Swiper />*/}
      <Swiper />
    </div>
	</article>
);

export default Stories;
