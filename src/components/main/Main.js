import { h } from 'preact';

import Greetings from '../Greetings/Greetings';
import Skills from '../Skills/Skills';
import Vacancies from '../Vacancies/Vacancies';
import Сomment from '../Сomment/Сomment';
import Questions from '../Questions/Questions';
import Benefits from '../Benefits/Benefits';

const Main = () => (
  <>
	<Greetings />
  <Skills />
  <Vacancies />
  <Benefits />
  <Сomment />
  <Questions />
  </>
);

export default Main;
