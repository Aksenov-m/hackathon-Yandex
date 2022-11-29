import {useState} from 'preact/hooks';
import VacancyCard from '../vacancyCard/VacancyCard';
import {VACANCY_CARDS_MASTER, VACANCY_CARDS_REWIEWER} from '../../utils/constantsVacancies.js.js';
import VacancyNavbar from '../VacancyNavbar/VacancyNavbar';

const Vacancies = () => {

  const [filteredMaster, setFilteredMaster] = useState(VACANCY_CARDS_MASTER);
  const [filteredRewier, setFilteredRewier] = useState(VACANCY_CARDS_REWIEWER);
  const [notFound, setNotFound] = useState(false);
  const [mentor, setmentor] = useState(true);
  const [rewiew, setrewiew] = useState(false);
  const [morebutton, setMorebutton] = useState(true)


    function vacancyMasterFilter(argument){
      const NEW_VACANCY_CARDS_MASTER = [...VACANCY_CARDS_MASTER].filter(item => item.status === argument);
      //const NEW_VACANCY_CARDS__REWIEWER = [...VACANCY_CARDS_REWIEWER].filter(item => item.status === argument);
      //setFilteredRewier(NEW_VACANCY_CARDS__REWIEWER)
      setMorebutton(false);
      setFilteredMaster(NEW_VACANCY_CARDS_MASTER);
      if(filteredMaster.length === 0){
        setNotFound(true);
      } else{
        setNotFound(false);
      }
    }

    function vacancyRewiewFilter(argument){
      //const NEW_VACANCY_CARDS_MASTER = [...VACANCY_CARDS_MASTER].filter(item => item.status === argument);
      const NEW_VACANCY_CARDS__REWIEWER = [...VACANCY_CARDS_REWIEWER].filter(item => item.status === argument);
      //setFilteredMaster(NEW_VACANCY_CARDS_MASTER);
      setFilteredRewier(NEW_VACANCY_CARDS__REWIEWER)
      setMorebutton(false)
      if(filteredRewier.length === 0){
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    }


  function vacancyMentorFilter(){
    if (!mentor) {
      setmentor(true);
      setrewiew(false);
    } else {
    setmentor(false)
    }
  }

  function vacancyRewiewerFilter(){
    if (!rewiew) {
      setrewiew(true)
      setmentor(false)
    } else {
    setrewiew(false)
    }
  }

  return (

  <section class ="vacancies" id="vacancies">
    <div class='vacancies__box'>
      <h1 class='vacancies__title'>Роли в нашей команде</h1>
      <div class='vacancies__button-box'>
        <button class={`${mentor ? 'vacancies__button vacancies__button_active' : 'vacancies__button vacancies__button_master vacancies__button_inactive'}`} onClick={vacancyMentorFilter}>Для наставников</button>

        {mentor && <VacancyNavbar handlefilterVacancy = {vacancyMasterFilter} />}

        {mentor && notFound ?

        <div>
          <p>Таких вакансий пока нет 😊
Чтобы посмотреть другие, поменяйте роль или направление.</p>
        </div>

        :

        <>
        <div class="vacancies__card-list">
          {mentor && filteredMaster.map(card => (<VacancyCard key={card.id} text={card.text} />))}
        </div>
        {mentor && morebutton && <button class='vacancies__more'>Ещё вакансии</button>}
        </>
        }

        <button class={`vacancies__button_rewiew ${rewiew ? 'vacancies__button vacancies__button_active' : 'vacancies__button vacancies__button_inactive'}`} onClick={vacancyRewiewerFilter}>Для ревьюеров</button>

        {rewiew && <VacancyNavbar handlefilterVacancy = {vacancyRewiewFilter} />}

        {rewiew && notFound ?

        <div>
          <p>Таких вакансий пока нет 😊
Чтобы посмотреть другие, поменяйте роль или направление.</p>
        </div>

        :

        <>
       <div class="vacancies__card-list">
         {rewiew && filteredRewier.map(card => (<VacancyCard key={card.id} text={card.text} />))}
       </div>
       {rewiew && morebutton && <button class='vacancies__more'>Ещё вакансии</button>}
      </>
      }

       </div>
       </div>
    </section>
  )
}

export default Vacancies;
