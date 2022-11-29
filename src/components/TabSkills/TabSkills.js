import {  } from 'preact/';

const TabSkills = (props) => {

  const handleBtnSkills = () => {
    return ('.tabSkills__text').click(() => ('.tabSkills__text').remove('active')).add(`active`);
  }

  return (
    <div className = 'tabSkills' >
      <button className = {`tabSkills__text ${props.class}`} onClick={handleBtnSkills}>
        {props.title}
      </button>
    </div>
  );
};

export default TabSkills;
