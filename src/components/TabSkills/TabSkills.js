import { h } from 'preact';

const TabSkills = ({title}) => {
  return (
    <div className='tabSkills'>
      <button className='tabSkills__text'>
        {title}
      </button>
    </div>
  );
};

export default TabSkills;
