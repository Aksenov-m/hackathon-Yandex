import { h } from 'preact';
import VacancyNavbar from '../VacancyNavbar/VacancyNavbar';
import VacancyCard from '../vacancyCard/VacancyCard';

const VacancyField = ({notFound,handlefilterVacancy,newStyle,cards,
  isOpen,onClose,stopPropagation,openPopup}) => {
  return (
  <>
    <VacancyNavbar handlefilterVacancy = {handlefilterVacancy} />

    {notFound ?

    <div>
      <p сlass='vacancies__not-found'>Таких вакансий пока нет 😊</p>
      <p сlass='vacancies__not-found'>Чтобы посмотреть другие, поменяйте роль или направление.</p>
    </div>

    :

    <div class="vacancies__card-list">
      {cards.map(card =>
      (<VacancyCard key={card.id} text={card.text}
        views={card.views}
        link={card.link}
        newStyle={newStyle}
        isOpen={isOpen}
        onClose={onClose}
        stopPropagation={stopPropagation}
        openPopup={openPopup} />))}
    </div>}
  </>)
}

export default VacancyField;
