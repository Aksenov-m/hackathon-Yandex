import {h} from 'preact';

import Greetings from '../Greetings/Greetings';
import Skills from '../Skills/Skills';
import Vacancies from '../Vacancies/Vacancies';
//import Сomment from '../Сomment/Сomment';
import Questions from '../Questions/Questions';
import Benefits from '../Benefits/Benefits';
import NotFound from '../NotFound/NotFound';
import HowBeExpert from '../HowBeExpert/HowBeExpert';
import Stories from '../Stories/Stories';
import {useState} from "preact/hooks";
//import PopupInterview from "../PopupInterview/PopupInterview";

const Main = () => {

  const [isOpenPopupInterview, setIsOpenPopupInterview] = useState(false)
  // eslint-disable-next-line no-unused-vars

  const openPopup = () => {
    setIsOpenPopupInterview(true)
  }

  const closeAllPopup = () => {
    setIsOpenPopupInterview(false)
  }

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      <Greetings />
      <Skills
        isOpen={isOpenPopupInterview}
        onClose={closeAllPopup}
        stopPropagation={stopPropagation}
        openPopup={openPopup}
      />
      <HowBeExpert />
      <Benefits />
      <Vacancies />
      <NotFound />
      {/*<Сomment />*/}
      <Questions />
      <Stories />
    </>
  )
}

export default Main;
