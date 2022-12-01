import { h } from 'preact';

const FormButton = ({style,text,onClick}) => (
	<button class={`${style}`} onClick={onClick}>{text}</button>
);

export default FormButton;
