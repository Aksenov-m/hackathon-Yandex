import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header() {

  // Стейт, отвечающий за бургер
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  function handleBurgeClick() {
    setBurgerOpen(true);
    document.body.classList.add("lock");
  }

  function closeBurger() {
    setBurgerOpen(false);
    document.body.classList.remove("lock");
  }

  useEffect(() => {
    if (!isBurgerOpen) return;
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeBurger();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [handleBurgeClick, closeBurger]);

  useEffect(() => {
    function handleClickClose(evt) {
      if (evt.target.classList.contains("header__burger_active")) {
        closeBurger();
      }
    }
    document.addEventListener("click", handleClickClose);
    return () => document.removeEventListener("click", handleClickClose);
  }, [handleBurgeClick, closeBurger]);

  return (
    <header class="header" id="header">
      <div class="header__section">
        <div class="header__body">
          <Logo Class="header__logo" />
          <div
            class={`header__burger ${
              isBurgerOpen ? "header__burger_active" : ""
            }`}
            onClick={handleBurgeClick}
          >
            <span onClick={handleBurgeClick} />
          </div>
          <Navigation burgerOpen={isBurgerOpen} closeBurger={closeBurger} />
        </div>
      </div>
    </header>
  );
}

export default Header;
