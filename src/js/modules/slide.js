import debounce from "./debounce.js";

export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
    this.activeClass = "active";
    this.slideIndexByData = {};
    this.slidesPerView = 3;
    this.changeEvent = new Event('changeEvent');
  }

  transition(active) {
    this.slide.style.transition = active ? "transform .3s" : "";
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  slidePosition(slide){
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 12;
    const slideCenter = -(slide.offsetLeft - margin);
    return slideCenter;
  }

  updatePosition(clientX) {
    this.dist.movement = this.dist.startX - clientX;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(e) {
    let movetype;
    if (e.type === "mousedown") {
      e.preventDefault();
      this.dist.startX = e.clientX;
      movetype = "mousemove";
    } else {
      this.dist.startX = e.changedTouches[0].clientX;
      movetype = "touchmove";
    }
    this.wrapper.addEventListener(movetype, this.onMove);
    this.transition(false);
  }

  onMove(e) {
    const pointerPosition =
      e.type === "mousemove" ? e.clientX : e.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(e) {
    const movetype = e.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(movetype, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.transition(true);
    this.changeSlideOnEnd();
  }

  initSlidesByData() {
    this.slideArray.forEach((item, index) => {
      const dataSlide = parseInt(item.element.dataset.slide);
      this.slideIndexByData[dataSlide] = index;
    });
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return { position, element };
    });
  }

    changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  slidesIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index === 0 ? last : index - 1,
      active: index,
      next: index === last ? 0 : index + 1,
    };
  }

  changeActiveClass() {
    this.slideArray.forEach((item) =>
      item.element.classList.remove(this.activeClass)
    );
    this.slideArray[this.index.active].element.classList.add(this.activeClass);
  }

  activePrevSlide() {
    const prev = this.index.prev;
    this.changeSlide(prev);
  }

  activeNextSlide() {
    const next = this.index.next;
    this.changeSlide(next);
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener("resize", this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  init() {
    this.bindEvents();
    this.transition(true);
    this.addSlideEvents();
    this.slidesConfig();
    this.addResizeEvent();
    this.initSlidesByData();
    this.changeSlide(0);
    this.initCustomControls();

    return this;
  }
}

export default class SlideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper);
    this.bindControlEvents();
  }

  init() {
    this.bindEvents();
    this.transition(true);
    this.addSlideEvents();
    this.slidesConfig();
    this.addResizeEvent();
    this.initSlidesByData();
    this.changeSlide(0);
    this.initCustomControls();
    return this;
  }

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.prevElement.addEventListener('click', this.activePrevSlide);
    this.nextElement.addEventListener('click', this.activeNextSlide);
  }

  createControl() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";

    const orderedSlides = [...this.slideArray].sort((a, b) => {
      const aData = parseInt(a.element.dataset.slide);
      const bData = parseInt(b.element.dataset.slide);
      return aData - bData;
    });

    orderedSlides.forEach((item) => {
      const dataSlide = item.element.dataset.slide;
      control.innerHTML += `<li><a href="#slide${dataSlide}">${dataSlide}</a></li>`;
    });

    this.wrapper.appendChild(control);
    return control;
  }

  initCustomControls() {
    this.customControls = document.querySelectorAll('.custom-controls li');
    if (!this.customControls.length) return;

    this.customControls.forEach((dot) => {
      dot.addEventListener('click', () => {
        const slideNumber = parseInt(dot.dataset.slide, 10);
        this.changeSlide(this.slideIndexByData[slideNumber]);
        this.updateCustomControls();
      });
    });

    this.wrapper.addEventListener('changeEvent', () => this.updateCustomControls());
    this.initSlidesByData();
    this.updateCustomControls();
  }

  updateCustomControls() {
    if (!this.customControls) return;

    this.customControls.forEach(dot => dot.classList.remove('active'));

    const currentSlide = parseInt(this.slideArray[this.index.active].element.dataset.slide, 10);
    const activeDot = Array.from(this.customControls).find(dot => parseInt(dot.dataset.slide,10) === currentSlide);

    if (activeDot) activeDot.classList.add('active');
  }

  eventControl(item, index) {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const dataSlide = index + 1;
      this.changeSlide(this.slideIndexByData[dataSlide]);
    });
    this.wrapper.addEventListener("changeEvent", this.activeControlItem);
  }

  activeControlItem() {
    this.controlArray.forEach((item) =>
      item.classList.remove(this.activeClass)
    );
    const currentSlide = parseInt(
      this.slideArray[this.index.active].element.dataset.slide
    );
    const controlIndex = currentSlide - 1;
    this.controlArray[controlIndex].classList.add(this.activeClass);
  }

  bindControlEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}
