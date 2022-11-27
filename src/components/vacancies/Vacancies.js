import { useState} from 'preact/hooks';
import VacancyCard from '../vacancyCard/VacancyCard';
import {VACANCY_CARDS_MASTER, VACANCY_CARDS_REWIEWER} from '../../utils/constantsVacancies.js';

const Vacancies = () => {

  const [filteredMaster, setFilteredMaster] = useState(VACANCY_CARDS_MASTER);
  const [filteredRewier, setFilteredRewier] = useState(VACANCY_CARDS_REWIEWER);
  const [notFound, setNotFound] = useState(false);

  function vacancyFilter(argument) {
    const NEW_VACANCY_CARDS_MASTER = [...VACANCY_CARDS_MASTER].filter(item => item.status === argument);
    const NEW_VACANCY_CARDS__REWIEWER = [...VACANCY_CARDS_REWIEWER].filter(item => item.status === argument);
    setFilteredMaster(NEW_VACANCY_CARDS_MASTER);
    setFilteredRewier(NEW_VACANCY_CARDS__REWIEWER)
    setNotFound(false);
    if(NEW_VACANCY_CARDS_MASTER.length === 0 || NEW_VACANCY_CARDS__REWIEWER === 0){
      setNotFound(true);
    }
  }

  return (

	<div class ="footer" id="footer">
		<h1>Vacancies</h1>
		<p>This is the Vacancies component.</p>

    <nav>
      <ul class='item-field'>
        <li class='item'>
          наставник
        </li>
        <li class='item'>
          ревьюер
        </li>
      </ul>
    </nav>

      <nav>
      <ul class='item-field'>
        <li class='item' onClick={()=>vacancyFilter(11)}>
          11
        </li>
        <li class='item' onClick={()=>vacancyFilter(22)}>
          22
        </li>
        <li class='item' onClick={()=>vacancyFilter(33)}>
          33
        </li>
        <li class='item' onClick={()=>vacancyFilter(44)}>
          44
        </li>
      </ul>
    </nav>

    <div>

    {notFound ?

    <div>
      <p>Ничего не найдено</p>
    </div>

    :
<>
    <div>
      {filteredRewier.map(card => (
      <VacancyCard key={card.id} text={card.text} description={card.description} />
    ))}
    </div>

    <div>
      {filteredMaster.map(card => (
    <VacancyCard key={card.id} text={card.text} description={card.description} />
  ))}
    </div>
</>
    }
    </div>
	</div>
);
}

export default Vacancies;
