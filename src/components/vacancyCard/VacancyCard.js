import { h } from 'preact';

const VacancyCard = ({text,description}) => (
	<div class ="vacancy-card">
		<h1>{text}</h1>
		<p>{description}</p>
	</div>
);

export default VacancyCard;
