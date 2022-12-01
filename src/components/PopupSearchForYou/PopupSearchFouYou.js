import {h} from 'preact';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

// форма "Не нашли себя!"

const PopupSearchFouYou = ({isOpen, onClose, stopPropagation}) => {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      stopPropagation={stopPropagation}
    >
      <iframe src="https://forms.yandex.ru/u/638470a55d2a06dc8a5f0e3f/?iframe=1" frameBorder="0"
              name="ya-form-638470a55d2a06dc8a5f0e3f" width="650" />
    </PopupWithForm>
  );
};

export default PopupSearchFouYou;
