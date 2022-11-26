import { h } from 'preact';
import Vacancies from '../vacancies/Vacancies'

const Main = () => (
	<div class='main' id='main'>
    <h1>Main</h1>
		<p>This is the Main component.</p>
		<Vacancies />
	</div>
);

export default Main;
