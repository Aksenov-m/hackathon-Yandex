import { h } from "preact";
// import { Link } from 'preact-router/match';


function Button(props) {

  return (
    <a class={`link ${props.Class}`} href={props.href} onClick={props.onClick} target={props.target}>
      {props.text} {props.children}
    </a>
  );
}

export default Button;
