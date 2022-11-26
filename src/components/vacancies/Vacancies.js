import { useState} from 'preact/hooks';
import VacancyCard from '../vacancyCard/VacancyCard';
import {VACANCY_CARDS} from '../../utils/contsants';

const Vacancies = () => {

  const [filtered, setFiltered] = useState(VACANCY_CARDS);
  const [notFound, setNotFound] = useState(false);

  function vacancyFilter(status) {
    const NEW_VACANCY_CARDS = [...VACANCY_CARDS].filter(item => item.status === status);
    setFiltered(NEW_VACANCY_CARDS);
    setNotFound(false);
    if(NEW_VACANCY_CARDS.length === 0){
      setNotFound(true);
    }
  }

  return (

	<div class ="footer" id="footer">
		<h1>Vacancies</h1>
		<p>This is the Vacancies component.</p>

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

    filtered.map(card => (
      <VacancyCard key={card.id} text={card.text} description={card.description} />
    ))
    }
    </div>
	</div>
);
}

export default Vacancies;
