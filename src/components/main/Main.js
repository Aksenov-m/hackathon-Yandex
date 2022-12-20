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

const Main = () => {

  const [isOpenPopupInterview, setIsOpenPopupInterview] = useState(false)
  const [isOpenPopupSearchYou, setIsOpenPopupSearchYou] = useState(false)
  const [isOpenPopupResponse, setIsOpenPopupResponse] = useState(false)
  // eslint-disable-next-line no-unused-vars

  const openPopup = () => {
    setIsOpenPopupInterview(true)
    document.body.classList.add('lock')
  }

  const openSearchPopup = () => {
    setIsOpenPopupSearchYou(true)
    document.body.classList.add('lock')
  }

  const openResponsePopup = () => {
    setIsOpenPopupResponse(true)
    document.body.classList.add('lock')
  }

  const closeAllPopup = () => {
    setIsOpenPopupInterview(false)
    setIsOpenPopupSearchYou(false)
    setIsOpenPopupResponse(false)
    document.body.classList.remove('lock')
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
  <Vacancies
  isOpen={isOpenPopupResponse}
  onClose={closeAllPopup}
  stopPropagation={stopPropagation}
  openPopup={openResponsePopup} />
  <NotFound
  isOpen={isOpenPopupSearchYou}
  onClose={closeAllPopup}
  stopPropagation={stopPropagation}
  openPopup={openSearchPopup} />
  {/*<Сomment />*/}
  <Questions />
  <Stories />
  </>);
}

export default Main;
