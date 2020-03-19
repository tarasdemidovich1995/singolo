import Slider from './scripts/slider.js';
import Navigation from './scripts/navigation.js';

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
