import {h} from 'preact';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const PopupInterview = ({isOpen, onClose}) => {
  return (
    <PopupWithForm
      name='interview'
      isOpen={isOpen}
      onClose={onClose}
    >
      <iframe src="https://forms.yandex.ru/u/6385b7963e9d0802d02ab1fc/?iframe=1" frameBorder="0"
              name="ya-form-6385b7963e9d0802d02ab1fc" width="100%" />
    </PopupWithForm>
  );
};

export default PopupInterview;
