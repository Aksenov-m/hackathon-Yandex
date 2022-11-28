import { h } from 'preact'
import { useRef, useEffect } from 'preact/hooks';
import Typed from "typed.js";

import foto from "../../imagesA/Illustration.png";
import ButtonLink from "../buttonLink/buttonLink";

function Greetings() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Делитесь опытом и знаниями",
        "Меняйте жизнь людей к лучшему",
        "Выбирайте сколько зарабатывать",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 900,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <section class="greetings app__margins" id="greetings">
      <article class="greetings__info">
        <h1 class="greetings__title">Помочь войти в IT и</h1>
        <div class="subtitle__container">
          <span class="greetings__subtitle" ref={el}  />
        </div>
        <p class="greetings__paragraph">Станьте наставником или ревьюером для студентов, которые пришли связать свою жизнь с IT</p>
        <ButtonLink
          href="#vacancies"
          Class="greetings__link"
          text="Уже хочу делиться опытом!"
        />
      </article>
      <img className="greetings__image" src={foto} alt="Фото иллюстрация." />
    </section>
  );
}

export default Greetings;
