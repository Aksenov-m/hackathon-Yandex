import { h } from 'preact';

const FormButton = ({style,text}) => (
	<button class={`${style}`}>{text}</button>
);

export default FormButton;
