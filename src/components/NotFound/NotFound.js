import { h } from 'preact';
import FormButton from '../FormButton/FormButton';

const NotFound = () => (
	<section class ="not-found app__margins">
    <div class ="not-found__box">
      <div class='not-found__group'>
        <h2 class ="not-found__title">Не нашли себя?</h2>
        <p class ="not-found__about">Если вы не нашли подходящей вакансии, но вам
интересно поработать с нами, заполните нашу форму</p>
        <FormButton text={'заполнить форму'} />
      </div>
      <div class='not-found__picture' />
    </div>
	</section>
);

export default NotFound;
