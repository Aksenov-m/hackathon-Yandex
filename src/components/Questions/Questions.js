import {h} from 'preact';
import TabSkills from "../TabSkills/TabSkills";
import BlockDescription from "../blockDescription/BlockDescription";
import Roles from "../Roles/Roles";
import {useState} from "preact/hooks";
import {response1, response2, response3, response4, response5} from "../../utils/responses";

const Questions = () => {
  const [btnNumber, setBtnNumber] = useState(1)
  const [response, setResponse] = useState(response1)
  const [visibleBlock, setVisibleBlock] = useState(false)

  const activeButton = (num) => {
    setBtnNumber(num)
    if (num === 1) {
      setResponse(response1)
    } else if (num === 2) {
      setResponse(response2)
    } else if (num === 3) {
      setResponse(response3)
    } else if (num === 4) {
      setResponse(response4)
    } else if (num === 5) {
      setResponse(response5)
    }
  }

  const activeButtonNumber1 = () => {
    activeButton(1)
    setVisibleBlock(true)
  }

  const activeButtonNumber2 = () => {
    activeButton(2)
    setVisibleBlock(true)
  }
  const activeButtonNumber3 = () => {
    activeButton(3)
    setVisibleBlock(true)
  }
  const activeButtonNumber4 = () => {
    activeButton(4)
    setVisibleBlock(true)
  }
  const activeButtonNumber5 = () => {
    activeButton(5)
    setVisibleBlock(true)
  }

  return (
    <section className='questions' id='questions'>
      <div className='questions__main'>
        <h2 className='skills__title'>Остались вопросы?</h2>
        <div className='questions__container-tab'>
          <div className='skills__section-tabBtn'>
            <ul className='skills__list skills__list_style_none'>
              <TabSkills title={'Рассматриваете ли вы резюме граждан других стран?'}
                         class={`tabSkills__text ${btnNumber === 1 ? 'active' : ''}`}
                         onClick={activeButtonNumber1}
              />

              {visibleBlock && btnNumber === 1
                ?
                <div className='questions__section-box'>
                  <div className='questions__box-hidden'>
                    <BlockDescription>
                      {response1}
                    </BlockDescription>
                  </div>
                </div>
                : ""}

              <TabSkills title={'Как меня введут в работу?'}
                         class={`tabSkills__text ${btnNumber === 2 ? 'active' : ''}`}
                         onClick={activeButtonNumber2}
              />
              {visibleBlock && btnNumber === 2
                ?
                <div className='questions__section-box'>
                  <div className='questions__box-hidden'>
                    <BlockDescription>
                      {response2}
                    </BlockDescription>
                  </div>
                </div>
                : ''
              }

              <TabSkills title={'Как проходят собеседования?'}
                         class={`tabSkills__text ${btnNumber === 3 ? 'active' : ''}`}
                         onClick={activeButtonNumber3}
              />

              {visibleBlock && btnNumber === 3
                ?
                <div className='questions__section-box'>
                  <div className='questions__box-hidden'>
                    <BlockDescription>
                      {response3}
                    </BlockDescription>
                  </div>
                </div>
                : ''
              }


              <TabSkills title={'У меня совсем нет преподавательского опыта. Я могу вести у вас курсы?'}
                         class={`tabSkills__text ${btnNumber === 4 ? 'active' : ''}`}
                         onClick={activeButtonNumber4}
              />

              {visibleBlock && btnNumber === 4
                ?
                <div className='questions__section-box'>
                  <div className='questions__box-hidden'>
                    <BlockDescription>
                      {response4}
                    </BlockDescription>
                  </div>
                </div>
                : ''
              }

              <TabSkills title={'Я откликнулся на вакансию, но не получил обратной связи. С кем мне связаться?'}
                         class={`tabSkills__text ${btnNumber === 5 ? 'active' : ''}`}
                         onClick={activeButtonNumber5}
              />

              {visibleBlock && btnNumber === 5
                ?
                <div className='questions__section-box'>
                  <div className='questions__box-hidden'>
                    <BlockDescription>
                      {response5}
                    </BlockDescription>
                  </div>
                </div>
                : ''
              }

            </ul>
          </div>
          <div className='questions__section-description'>
            <div className='questions__box questions__box_style_text'>
              <BlockDescription>

                {response.map((res) => (
                    <Roles key={res} text={res} />
                  )
                )}
              </BlockDescription>
            </div>

            <div className='questions__images' />

          </div>
        </div>
      </div>
    </section>
  )
}

export default Questions;
