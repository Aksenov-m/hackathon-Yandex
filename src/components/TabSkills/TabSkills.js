import { h } from 'preact';

const TabSkills = ({prof, onClick, isActive}) => {

  // const [isActive, setIsActive] = useState(false)
  //
  // const activeBtn = () => {
  //   setIsActive(true)
  // }

  const handleBtn = () => {
    onClick()
  }

  return (
    <div className = 'tabSkills' >
      <button className = {`tabSkills__text ${isActive ? 'tabSkills__text-active' : ''}`} onClick={handleBtn}>
        {prof}
      </button>
    </div>
  );
};

export default TabSkills;
