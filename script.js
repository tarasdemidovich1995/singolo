import Slider from './scripts/slider.js';
import Navigation from './scripts/navigation.js';
import Portfolio from './scripts/portfolio.js';
import Form from './scripts/form.js';

const slides = document.querySelector('.carousel__slides');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const background = document.querySelector('.slider');

const slider = new Slider(background, slides, arrowLeft, arrowRight);
window.slider = slider;

const navList = document.querySelector('.navigation__list');
const sections = document.querySelectorAll('section');

const navigation = new Navigation(navList, sections);
window.navigation = navigation;

const filterList = document.querySelector('.portfolio__filter-list');
const projectsList = document.querySelector('.portfolio__projects-list');

const portfolio = new Portfolio(filterList, projectsList);
window.portfolio = portfolio;


const formField = document.querySelector('.form');
const formPopup = document.querySelector('.form-popup');

const form = new Form(formField, formPopup);
window.form = form;