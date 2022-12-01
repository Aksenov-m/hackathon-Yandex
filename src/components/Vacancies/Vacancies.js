import {useEffect,useState} from 'preact/hooks';
import {VACANCY_CARDS_MASTER, VACANCY_CARDS_REWIEWER} from '../../utils/constantsVacancies.js.js';
import VacaciesField from '../VacanciesField/VacanciesField';

const Vacancies = () => {

  const [filteredMaster, setFilteredMaster] = useState(VACANCY_CARDS_MASTER);
  const [filteredRewier, setFilteredRewier] = useState(VACANCY_CARDS_REWIEWER);
  const [notFound, setNotFound] = useState(false);
  const [mentor, setmentor] = useState(false);
  const [rewiew, setrewiew] = useState(false);
  const [listOpen, setListOpen] = useState(false)


const vacancyFilter = (argument) => {
  if(argument === 'all'){
    setFilteredMaster(VACANCY_CARDS_MASTER);
    setFilteredRewier(VACANCY_CARDS_REWIEWER);
  } else {
    const NEW_VACANCY_CARDS_MASTER = [...VACANCY_CARDS_MASTER].filter(item => item.status === argument);
    const NEW_VACANCY_CARDS__REWIEWER = [...VACANCY_CARDS_REWIEWER].filter(item => item.status === argument);
    setFilteredRewier(NEW_VACANCY_CARDS__REWIEWER)
    setFilteredMaster(NEW_VACANCY_CARDS_MASTER);
    setListOpen(true)
    if(NEW_VACANCY_CARDS__REWIEWER.length === 0 || NEW_VACANCY_CARDS_MASTER.length === 0){
      setNotFound(true);
    } else{
      setNotFound(false);
    }
  }
}

  function vacancyMentorFilter(){
    if (!mentor) {
      setmentor(true);
      setrewiew(false);
      setFilteredMaster(VACANCY_CARDS_MASTER);
    } else {
    setmentor(false);
    }
  }

 function vacancyRewiewerFilter(){
    if (!rewiew) {
      setrewiew(true)
      setmentor(false)
      setFilteredRewier(VACANCY_CARDS_REWIEWER)
    } else {
    setrewiew(false)
    }
  }

  useEffect(() => {
    console.log('the job has changed', filteredMaster, filteredRewier)
 }, [filteredMaster,filteredRewier])

  return (

  <section class ="vacancies" id="vacancies">
    <div class='vacancies__box'>
      <h1 class='vacancies__title'>Роли в нашей команде</h1>
      <div class='vacancies__button-box'>
       <button class={`${mentor ? 'vacancies__button vacancies__button_active'
        : 'vacancies__button vacancies__button_master vacancies__button_inactive'}`}
        onClick={vacancyMentorFilter}>Для наставников</button>

        {mentor && <VacaciesField notFound ={notFound}
        handlefilterVacancy = {vacancyFilter}
        newStyle={listOpen}
        cards={filteredMaster}
        />}

        <button class={`vacancies__button_rewiew
        ${rewiew ? 'vacancies__button vacancies__button_active'
         : 'vacancies__button vacancies__button_inactive'}`}
         onClick={vacancyRewiewerFilter}>Для ревьюеров</button>

        {rewiew && <VacaciesField notFound ={notFound}
        handlefilterVacancy = {vacancyFilter}
        newStyle={listOpen}
        cards={filteredRewier}
        />}
       </div>
       </div>
    </section>
  )
}

export default Vacancies;
