import { useState } from 'preact/hooks';
import TabSkills from "../TabSkills/TabSkills";
import BlockDescription from "../blockDescription/BlockDescription";
import PopupInterview from "../PopupInterview/PopupInterview";

const Skills = () => {

  const [isOpenPopupInterview, setIsOpenPopupInterview] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [isActive, setIsActive] = useState(false)
  const profs = [
    'Веб-разработка',
    'Дизайн-интерфейсов',
    'Аналитик данных',
    'Менеджер проектов',
    'Менеджер по интернет-маркетингу',
    'Data scientist',
    'Тестировщик',
    'Менеджер проектов'
  ]

  //const [prof, setProf] = useState(1)

  const openPopup = () => {
    setIsOpenPopupInterview(true)
  }

  const closeAllPopup = () => {
    setIsOpenPopupInterview(false)
  }

  const activeBtn = (prof) => {
    if(profs.prof === prof) {
      setIsActive(true)
      //setProf(prof)
    } else {
      setIsActive(false)
    }

  }

  return (
    <section className='skills'>
      <div className='skills__main'>
        <h2 className='skills__title'>Наставник или ревьюер?</h2>
        <p className='skills__link'>Пройдите <a className='skills__interview' href="#" onClick={openPopup}>опрос</a>, если сложно решить</p>

        <div className='skills__container-tab'>
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
          <div className='skills__section-description'>
            <h3 className='skills__subtitle'>Наставник</h3>

            <div className='skills__box'>
              <BlockDescription>
                <ul>
                  <li className='skills__description-item'>
                    Помогать студентам ставить цели, рефлексировать
                    и делать выводы
                  </li>
                  <li className='skills__description-item'>
                    Отвечать на их вопросы в чате
                  </li>
                  <li className='skills__description-item'>
                    Проводить вебинары 2 раза в месяц
                    и давать обратную связь
                  </li>
                  <li className='skills__description-item'>
                    Делиться опытом и мотивировать
                  </li>
                </ul>
              </BlockDescription>
            </div>

            <h3 className='skills__subtitle'>Ревьюер</h3>

            <div className='skills__box'>
              <BlockDescription>
                <ul>
                  <li className='skills__description-item'>
                    Проверять макеты студентов
                  </li>
                  <li className='skills__description-item'>
                    Простыми словами объяснять им их ошибки
                  </li>
                  <li className='skills__description-item'>
                    Давать корректирующую обратную связь
                  </li>
                  <li className='skills__description-item'>
                    Оценивать работы - зачёт/незачёт
                  </li>
                </ul>
              </BlockDescription>
            </div>

          </div>
        </div>
        <div className='skills__container-btn'>
          <button className='skills__btn-look'>Посмотреть вакансии</button>
        </div>


        <div className='skills__container-work'>
          <h3 className='skills__subtitle'>Условия работы</h3>
          <div className='skills__section-row'>
            <div className='skills__item'>
              <img src="#" alt="" />
              <p className='skills__text'>В группе около 50 человек</p>
            </div>
            <div className='skills__item'>
              <img src="#" alt="" />
              <p className='skills__text'>2-3 часа в день</p>
            </div>
            <div className='skills__item'>
              <img src="#" alt="" />
              <p className='skills__text'>доход от 35 до 55 тысяч рублей в месяц </p>
            </div>
          </div>
        </div>

        <div className='skills__container-expert'>
          <h3 className='skills__subtitle'>Как стать экспертом?</h3>
          <div className='skills__section-column'>
            <div className='skills__item'>
              <img src="#" alt="" />
              <p className='skills__text'>Выберите роль и заполните заявку</p>
            </div>
            <div className='skills__item'>
              <img src="#" alt="" />
              <p className='skills__text'>Пройдите отбор и бесплатное обучение</p>
            </div>
            <div className='skills__item'>
              <img src="#" alt="" />
              <p className='skills__text'>Начните делиться знаниями со студентами Яндекс Практикума</p>
            </div>
          </div>
        </div>


      </div>

      <PopupInterview
        isOpen={isOpenPopupInterview}
        onClose={closeAllPopup}
      />
    </section>
  );
}

export default Skills;

// <TabSkills title={'Веб-разработка'} />
//               <TabSkills title={'Дизайн-интерфейсов'} />
//               <TabSkills title={'Аналитик данных'} />
//               <TabSkills title={'Менеджер проектов'} />
//               <TabSkills title={'Менеджер по интернет-маркетингу'} />
//               <TabSkills title={'Data scientist'} />
//               <TabSkills title={'Тестировщик'} />
//               <TabSkills title={'Менеджер проектов'} />
