import { h } from 'preact';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const PopupInterview = ({isOpen, onClose}) => {
  return (
    <PopupWithForm
      name='interview'
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default PopupInterview;
