import {h} from 'preact';
import TabSkills from "../TabSkills/TabSkills";
import BlockDescription from "../blockDescription/BlockDescription";
import PopupInterview from "../PopupInterview/PopupInterview";
import ButtonLink from "../buttonLink/buttonLink";

const Skills = ({isOpen, onClose, stopPropagation, openPopup}) => {

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
                         class={'tabSkills__text_size_fix'}
              />
              <TabSkills title={'Дизайн'}
                         class={'tabSkills__text_size_fix active'}
              />
              <TabSkills title={'Анализ данных'}
                         class={'tabSkills__text_size_fix'}
              />
              <TabSkills title={'Маркетинг'}
                         class={'tabSkills__text_size_fix'}
              />
              <TabSkills title={'Менеджмент'}
                         class={'tabSkills__text_size_fix'}
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
                <ul className='skills__list'>
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
