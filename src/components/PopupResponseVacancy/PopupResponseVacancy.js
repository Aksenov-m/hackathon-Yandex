import {h} from 'preact';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

// форма "Отклик на вакансию"

const PopupResponseVacancy = ({isOpen, onClose}) => {
  return (
    <PopupWithForm
      name='interview'
      isOpen={isOpen}
      onClose={onClose}
    >
      <iframe src="https://forms.yandex.ru/u/6384746cf47e73e667b8b8ee/?iframe=1" frameBorder="0"
              name="ya-form-6384746cf47e73e667b8b8ee" width="650" />
    </PopupWithForm>
  );
};

export default PopupResponseVacancy;



