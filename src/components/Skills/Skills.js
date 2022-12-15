import {useState} from 'preact/hooks';
import TabSkills from "../TabSkills/TabSkills";
import BlockDescription from "../blockDescription/BlockDescription";
import PopupInterview from "../PopupInterview/PopupInterview";
import ButtonLink from "../buttonLink/buttonLink";
import {rolesMentor1, rolesMentor2, rolesMentor3} from '../../utils/rolesMentor';
import {rolesRev1} from '../../utils/rolesReviewer';
import Roles from '../Roles/Roles'

const Skills = ({isOpen, onClose, stopPropagation, openPopup}) => {

  const [btnNumber, setBtnNumber] = useState(1)
  const [rolesMentor, setRolesMentor] = useState(rolesMentor1)
  const [rolesReviewer, setRolesReviewer] = useState(rolesRev1)

  const activeButton = (num) => {
    setBtnNumber(num)
    if (num === 1) {
      setRolesMentor(rolesMentor1)
      setRolesReviewer(rolesRev1)
    } else if (num === 2) {
      setRolesMentor(rolesMentor2)
      setRolesReviewer(rolesRev1)
    } else if (num === 3) {
      setRolesMentor(rolesMentor3)
      setRolesReviewer(rolesRev1)
    } else if (num === 4) {
      setRolesMentor(rolesMentor1)
      setRolesReviewer(rolesRev1)
    } else if (num === 5) {
      setRolesMentor(rolesMentor1)
      setRolesReviewer(rolesRev1)
    }
  }

  const activeButtonNumber1 = () => {
    activeButton(1)
  }

  const activeButtonNumber2 = () => {
    activeButton(2)
  }
  const activeButtonNumber3 = () => {
    activeButton(3)
  }
  const activeButtonNumber4 = () => {
    activeButton(4)
  }
  const activeButtonNumber5 = () => {
    activeButton(5)
  }


  return (
    <section className='skills'>
      <div className='skills__main'>
        <h2 className='skills__title'>Наставник или ревьюер?</h2>
        <p className='skills__paragraph'>В Яндекс Практикуме есть наставники и ревьюеры,
          которые выполняют разные задачи. Вы можете выбрать роль, которая вам по душе.</p>

        <div className='skills__container-tab'>
          <div className='skills__section-tabBtn'>
            <ul className='skills__list skills__list_style_none skills__list_flex_row skills__list_scroll'>
              <TabSkills title={'Программирование'}
                         class={`tabSkills__text_size_fix ${btnNumber === 1 ? 'active' : ''}`}
                         onClick={activeButtonNumber1}
              />
              <TabSkills title={'Дизайн'}
                         class={`tabSkills__text_size_fix ${btnNumber === 2 ? 'active' : ''}`}
                         onClick={activeButtonNumber2}
              />
              <TabSkills title={'Анализ данных'}
                         class={`tabSkills__text_size_fix ${btnNumber === 3 ? 'active' : ''}`}
                         onClick={activeButtonNumber3}
              />
              <TabSkills title={'Маркетинг'}
                         class={`tabSkills__text_size_fix ${btnNumber === 4 ? 'active' : ''}`}
                         onClick={activeButtonNumber4}
              />
              <TabSkills title={'Менеджмент'}
                         class={`tabSkills__text_size_fix ${btnNumber === 5 ? 'active' : ''}`}
                         onClick={activeButtonNumber5}
              />

            </ul>

            <div className='skills__container-btn skills__container-btn_hidden'>
              <BlockDescription>
                <div className='skills__box-question'>
                  <p className='skills__text-test'>Пройдите короткий тест, чтобы узнать,
                    какая роль вам больше подходит</p>
                  <ButtonLink
                    Class="skills__btn"
                    text="Кто я?"
                    onClick={openPopup}
                  />

                </div>
              </BlockDescription>

            </div>

          </div>
          <div className='skills__section-description'>
            <h3 className='skills__subtitle'>Наставник</h3>

            <div className='skills__box'>
              <BlockDescription>
                <ul className='skills__list'>
                  {rolesMentor.map((role) => (
                    <Roles key={role} text={role}/>
                    )
                  )}

                  {/*<li className='skills__description-item'>*/}
                  {/*  Помогать студентам ставить цели, рефлексировать*/}
                  {/*  и делать выводы*/}
                  {/*</li>*/}
                  {/*<li className='skills__description-item'>*/}
                  {/*  Отвечать на их вопросы в чате*/}
                  {/*</li>*/}
                  {/*<li className='skills__description-item'>*/}
                  {/*  Проводить вебинары 2 раза в месяц*/}
                  {/*  и давать обратную связь*/}
                  {/*</li>*/}
                  {/*<li className='skills__description-item'>*/}
                  {/*  Делиться опытом и мотивировать*/}
                  {/*</li>*/}
                </ul>
              </BlockDescription>
            </div>

            <h3 className='skills__subtitle'>Ревьюер</h3>

            <div className='skills__box'>
              <BlockDescription>
                <ul className='skills__list'>

                  {rolesReviewer.map((role) => (
                    <Roles key={role} text={role}/>
                    )
                  )}
                  {/*<li className='skills__description-item'>*/}
                  {/*  Проверять макеты студентов*/}
                  {/*</li>*/}
                  {/*<li className='skills__description-item'>*/}
                  {/*  Простыми словами объяснять им их ошибки*/}
                  {/*</li>*/}
                  {/*<li className='skills__description-item'>*/}
                  {/*  Давать корректирующую обратную связь*/}
                  {/*</li>*/}
                  {/*<li className='skills__description-item'>*/}
                  {/*  Оценивать работы - зачёт/незачёт*/}
                  {/*</li>*/}
                </ul>
              </BlockDescription>
            </div>

          </div>
        </div>

        <ButtonLink
          Class="greetings__link skills__btn skills__btn-visible"
          text="Какая роль мне больше подойдет?"
          onClick={openPopup}
        />

        <div className='skills__container-work'>
          <h3 className='skills__subtitle'>Условия работы</h3>
          <div className='skills__section-row'>
            <div className='skills__item'>

              <div className='skills__img-smile skills__img' />
              <p className='skills__text'>В группе около 50 человек</p>
            </div>
            <div className='skills__item'>
              <div className='skills__img-yes skills__img' />
              <p className='skills__text'>2-3 часа в день</p>
            </div>
            <div className='skills__item'>
              <div className='skills__img-plus skills__img' />

              <p className='skills__text'>доход от 35 до 55 тысяч рублей в месяц </p>
            </div>
          </div>
        </div>

      </div>

      <PopupInterview
        isOpen={isOpen}
        onClose={onClose}
        stopPropagation={stopPropagation}
      />
    </section>
  );
}

export default Skills;
