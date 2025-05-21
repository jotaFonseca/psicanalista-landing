import { MenuMobile } from "./modules/menuMobile.js";

const menuMobile = document.querySelector('.mobile-menu')
const navbar = document.querySelector('.nav')

const menu = new MenuMobile(menuMobile, navbar)
menu.init()