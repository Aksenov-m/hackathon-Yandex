import {useState} from 'preact/hooks';
import VacancyCard from '../vacancyCard/VacancyCard';
import {VACANCY_CARDS_MASTER, VACANCY_CARDS_REWIEWER} from '../../utils/constantsVacancies.js.js';
import VacancyNavbar from '../VacancyNavbar/VacancyNavbar';

const Vacancies = () => {

  //const [filteredMaster, setFilteredMaster] = useState(VACANCY_CARDS_MASTER);
  //const [filteredRewier, setFilteredRewier] = useState(VACANCY_CARDS_REWIEWER);
  //const [notFound, setNotFound] = useState(false);
  const [mentor, setmentor] = useState(true);
  const [rewiew, setrewiew] = useState(false);

  /*function vacancyFilter(argument) {
    const NEW_VACANCY_CARDS_MASTER = [...VACANCY_CARDS_MASTER].filter(item => item.status === argument);
    const NEW_VACANCY_CARDS__REWIEWER = [...VACANCY_CARDS_REWIEWER].filter(item => item.status === argument);
    setFilteredMaster(NEW_VACANCY_CARDS_MASTER);
    setFilteredRewier(NEW_VACANCY_CARDS__REWIEWER)
    //setNotFound(false);
    //if(NEW_VACANCY_CARDS_MASTER.length === 0 || NEW_VACANCY_CARDS__REWIEWER === 0){
    //  setNotFound(true);
    //}
  }*/

  function vacancyFilterProf1(){
    if (!mentor) {
      setmentor(true)
    } else {
    setmentor(false)
    }
  }

  function vacancyFilterProf2(){
    if (!rewiew) {
      setrewiew(true)
    } else {
    setrewiew(false)
    }
  }

  return (

  <div class ="vacancies" id="vacancies">
    <div class='vacancies__box'>
      <h1 class='vacancies__title'>Вакансии</h1>
      <div class='vacancies__button-box'>
        <button class='vacancies__button vacancies__button_master' onClick={()=> vacancyFilterProf1()}>Для наставников</button>

        <VacancyNavbar />

        <div class="vacancies__card-list">
          {VACANCY_CARDS_MASTER.map(card => (<VacancyCard key={card.id} text={card.text} />))}
        </div>
        <button class='vacancies__more'>Ещё вакансии</button>

        <button class='vacancies__button vacancies__button_rewiew' onClick={()=> vacancyFilterProf2()}>Для ревьюеров</button>

        <VacancyNavbar />

       <div class="vacancies__card-list">
         {VACANCY_CARDS_REWIEWER.map(card => (<VacancyCard key={card.id} text={card.text} />))}
       </div>
       <button class='vacancies__more'>Ещё вакансии</button>

      </div>
      </div>
    </div>
  )
}

export default Vacancies;
