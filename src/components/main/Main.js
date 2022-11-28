import { h } from 'preact';

import Greetings from '../Greetings/Greetings';
import Skills from '../Skills/Skills';
import Vacancies from '../Vacancies/Vacancies';
import Сomment from '../Сomment/Сomment';
import Questions from '../Questions/Questions';
import Benefits from '../Benefits/Benefits';
import NotFound from '../NotFound/NotFound'

const Main = () => (
  <>
	<Greetings />
  <Skills />
  <Vacancies />
  <Benefits />
  <NotFound />
  <Сomment />
  <Questions />
  </>
);

export default Main;
