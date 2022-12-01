import { h } from 'preact';
import FormButton from '../FormButton/FormButton';

const NotFound = () => (
	<section class ="not-found">
    <div class ="not-found__box">
      <div class='not-found__group'>
        <h2 class ="not-found__title">Не нашли себя?</h2>
        <p class ="not-found__about">Если вы не нашли подходящей вакансии, но вам
интересно поработать с нами, заполните нашу форму</p>
      </div>
      <div class='not-found__picture' />
      <FormButton text={'Заполнить форму'} style={'not-found__button'} />
    </div>
	</section>
);

export default NotFound;
