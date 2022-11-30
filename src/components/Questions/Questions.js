import { h } from 'preact';
import TabSkills from "../TabSkills/TabSkills";
import BlockDescription from "../blockDescription/BlockDescription";

const Questions = () => {

  return (
    <section className='questions' id='questions'>
		<div className='questions__main'>
      <h2 className='skills__title'>Остались вопросы?</h2>
      <div className='questions__container-tab'>
        <div className='skills__section-tabBtn'>
            <ul className='skills__list skills__list_style_none'>
              <TabSkills title={'Рассматриваете ли вы резюме граждан других стран?'} />
              <TabSkills title={'Как меня введут в работу?'} />
              <TabSkills title={'Как проходят собеседования?'} class={'active'} />
            {/*  <div className='questions__box-hidden'>*/}
            {/*  <BlockDescription>*/}
            {/*    <p className='questions__description '>Собеседование проходит в онлайн режиме, в удобное для вас время.*/}
            {/*      Расскажете о своем опыте и желании преподавать. При успешном собеседовании*/}
            {/*      подберете для себя график и пройдете бесплатное обучение.*/}
            {/*    </p>*/}
            {/*  </BlockDescription>*/}
            {/*</div>*/}
              <TabSkills title={'У меня совсем нет преподавательского опыта. Я могу вести у вас курсы?'} />
              <TabSkills title={'Я откликнулся на вакансию, но не получил обратной связи. С кем мне связаться?'} />
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
          <div className='questions__images'></div>
          {/*<img src="../../images-gutkati/message.svg" alt="Сообщения" className='questions__images' />*/}
        </div>
      </div>
    </div>
	</section>
  )
}

export default Questions;


// const profs = [
//     'Рассматриваете ли вы резюме граждан других стран?',
//     'Как меня введут в работу?',
//     'Как проходят собеседования?',
//     'У меня совсем нет преподавательского опыта. Я могу вести у вас курсы?',
//     'Я откликнулся на вакансию, но не получил обратной связи. С кем мне связаться?',
//   ]
