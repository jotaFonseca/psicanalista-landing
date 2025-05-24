import { MenuMobile } from "./modules/menuMobile.js";
import { ScrollAnimation } from "./modules/ScrollAnimation.js"
import Slidenav from "./modules/slide.js";

const menuMobile = document.querySelector('.mobile-menu')
const navbar = document.querySelector('.nav')

const menu = new MenuMobile(menuMobile, navbar)
menu.init()

const scroll = new ScrollAnimation()
scroll.init()

const slide = new Slidenav('.slide', '.wrapper')
slide.init()
slide.addArrow('.prev', '.next')