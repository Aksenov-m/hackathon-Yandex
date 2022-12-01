import { h } from 'preact';

const TabSkills = (props) => {

  return (

    <div className = 'tabSkills' >
      <button className = {`tabSkills__text ${props.class}`}>
        {props.title}
      </button>
    </div>
  );
};

export default TabSkills;



