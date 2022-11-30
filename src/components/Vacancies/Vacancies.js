import {useState} from 'preact/hooks';
import VacancyCard from '../vacancyCard/VacancyCard';
import {VACANCY_CARDS_MASTER, VACANCY_CARDS_REWIEWER} from '../../utils/constantsVacancies.js.js';
import VacancyNavbar from '../VacancyNavbar/VacancyNavbar';

const Vacancies = () => {

  const [filteredMaster, setFilteredMaster] = useState(VACANCY_CARDS_MASTER);
  const [filteredRewier, setFilteredRewier] = useState(VACANCY_CARDS_REWIEWER);
  const [notFound, setNotFound] = useState(false);
  const [mentor, setmentor] = useState(false);
  const [rewiew, setrewiew] = useState(false);
  const [listOpen, setListOpen] = useState(false)

    function vacancyMasterFilter(argument){
      if(argument === 'all'){
        setFilteredMaster(VACANCY_CARDS_MASTER)
        console.log(argument);
        console.log(filteredMaster);
      } else {
      const NEW_VACANCY_CARDS_MASTER = [...VACANCY_CARDS_MASTER].filter(item => item.status === argument);
      //const NEW_VACANCY_CARDS__REWIEWER = [...VACANCY_CARDS_REWIEWER].filter(item => item.status === argument);
      //setFilteredRewier(NEW_VACANCY_CARDS__REWIEWER)
      setFilteredMaster(NEW_VACANCY_CARDS_MASTER);
      setListOpen(true)
      if(filteredMaster.length === 0){
        setNotFound(true);
      } else{
        setNotFound(false);
      }
    }
    }

    function vacancyRewiewFilter(argument){
      if(argument === 'all'){
        setFilteredRewier(VACANCY_CARDS_REWIEWER)
      } else {
      //const NEW_VACANCY_CARDS_MASTER = [...VACANCY_CARDS_MASTER].filter(item => item.status === argument);
      const NEW_VACANCY_CARDS__REWIEWER = [...VACANCY_CARDS_REWIEWER].filter(item => item.status === argument);
      //setFilteredMaster(NEW_VACANCY_CARDS_MASTER);
      setFilteredRewier(NEW_VACANCY_CARDS__REWIEWER)
      setListOpen(true)
      if(filteredRewier.length === 0){
        setNotFound(true);
      } else {
        setNotFound(false);
      }
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
        <button class={`${mentor ? 'vacancies__button vacancies__button_active'
        : 'vacancies__button vacancies__button_master vacancies__button_inactive'}`}
        onClick={vacancyMentorFilter}>Для наставников</button>

        {mentor && <VacancyNavbar handlefilterVacancy = {vacancyMasterFilter} />}

        {mentor && notFound ?

        <div>
          <p сlass='vacancies__not-found'>Таких вакансий пока нет 😊</p>
          <p сlass='vacancies__not-found'>Чтобы посмотреть другие, поменяйте роль или направление.</p>
        </div>

        :

        <>
        <div class="vacancies__card-list">
          {mentor && filteredMaster.map(card =>
            (<VacancyCard key={card.id}
            text={card.text}
            views={card.views}
            link={card.link}
            onclick={listOpen} />))}
        </div>
        </>
        }

        <button class={`vacancies__button_rewiew ${rewiew ? 'vacancies__button vacancies__button_active' : 'vacancies__button vacancies__button_inactive'}`} onClick={vacancyRewiewerFilter}>Для ревьюеров</button>

        {rewiew && <VacancyNavbar handlefilterVacancy = {vacancyRewiewFilter} />}

        {rewiew && notFound ?

        <div>
          <p сlass='vacancies__not-found'>Таких вакансий пока нет 😊</p>
          <p сlass='vacancies__not-found'>Чтобы посмотреть другие, поменяйте роль или направление.</p>
        </div>

        :

        <>
       <div class="vacancies__card-list">
         {rewiew && filteredRewier.map(card =>
          (<VacancyCard key={card.id}
          text={card.text}
          views={card.views}
          link={card.link}
          onclick={listOpen} />))}
       </div>
      </>
      }

       </div>
       </div>
    </section>
  )
}

export default Vacancies;
