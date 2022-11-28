import { h } from 'preact';
import TabSkills from "../TabSkills/TabSkills";
import BlockDescription from "../blockDescription/BlockDescription";
import {useState} from "preact/hooks";

const Questions = () => {
  const [isActive, setIsActive] = useState(false)
  const profs = [
    'Рассматриваете ли вы резюме граждан других стран?',
    'Как меня введут в работу?',
    'Как проходят собеседования?',
    'У меня совсем нет преподавательского опыта. Я могу вести у вас курсы?',
    'Я откликнулся на вакансию, но не получил обратной связи. С кем мне связаться?',
  ]

  const activeBtn = (prof) => {
    if(profs.prof === prof) {
      setIsActive(true)
      //setProf(prof)
    } else {
      setIsActive(false)
    }

  }

  return (
    <section className='questions'>
		<div className='questions__main'>
      <h2 className='skills__title'>Остались вопросы?</h2>
      <div className='questions__container-tab'>
        <div className='skills__section-tabBtn'>
            <ul className='skills__list'>
                {profs.map(prof =>
                  <TabSkills
                    prof={prof}
                    key={prof}
                    //active={profs.prof === prof}
                    isActive={isActive}
                    onClick={activeBtn}
                  />
                )}
            </ul>
          </div>
        <div className='questions__section-description'>
            <div className='questions__box'>
              <BlockDescription>
                <p className='questions__description'>Собеседование проходит в онлайн режиме, в удобное для вас время.
                  Расскажете о своем опыте и желании преподавать. При успешном собеседовании
                  подберете для себя график и пройдете бесплатное обучение.
                </p>
              </BlockDescription>
            </div>
          <img src="../../images-gutkati/Union.svg" alt="Собеседники" className='questions__images' />
        </div>
      </div>
    </div>
	</section>
  )
}

export default Questions;
