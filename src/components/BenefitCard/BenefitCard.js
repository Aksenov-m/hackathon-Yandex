import { h } from 'preact';

const BenefitCard = ({title, about, style}) => (
	<li class='benefits__item'>
    <div class={`benefits__icon ${style}`} />
    <h3 class='benefits__headline'>{title}</h3>
    <p class='benefits__subtitle'>{about}</p>
  </li>
);

export default BenefitCard;
