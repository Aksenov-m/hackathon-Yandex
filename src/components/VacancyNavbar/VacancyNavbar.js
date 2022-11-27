import {h} from 'preact';

const VacancyNavbar = () => {

  return(
	<nav class='vacancy__navbar'>
      <ul class='vacancy__navbar-list'>
        <li class='vacancy__navbar-item vacancy__navbar-item_active' >
        Программирование
        </li>
        <li class='vacancy__navbar-item'>
        Дизайн
        </li>
        <li class='vacancy__navbar-item'>
        Анализ{'\u00A0'}данных
        </li>
        <li class='vacancy__navbar-item'>
        Маркетинг
        </li>
        <li class='vacancy__navbar-item'>
        Менеджмент
        </li>
      </ul>
    </nav>
  )
};

export default VacancyNavbar;
