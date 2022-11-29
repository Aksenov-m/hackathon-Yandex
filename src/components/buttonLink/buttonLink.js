import { h } from "preact";
// import { Link } from 'preact-router/match';


function Button(props) {

  return (
    <a class={`link ${props.Class}`} href={props.href} onClick={props.onClick}>
      {props.text}
    </a>
  );
}

export default Button;
