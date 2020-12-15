require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import calc from './modules/calc';
import tabs from './modules/tabs';
import timer from './modules/timer';
import slider from './modules/slider';
import modal from './modules/modal';
import forms from './modules/forms';
import cards from './modules/cards';
import openModal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(
    () => openModal('.modal', modalTimerId),
    300000
  );
  const deadline = '2020-12-31';

  tabs({
    tabsSelector: '.tabheader__item',
    tabsContentSelector: '.tabcontent',
    tabsParentSelector: '.tabheader__items',
    activeClass: '.tabheader__item_active',
  });
  timer('.timer', deadline);
  modal('[data-modal]', '.modal', modalTimerId);
  forms('form', modalTimerId);
  cards();
  calc();
  slider({
    container: '.offer__slide',
    slide: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    curentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
  });
});
