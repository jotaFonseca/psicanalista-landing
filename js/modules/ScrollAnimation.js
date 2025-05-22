export class ScrollAnimation {
  constructor() {
    this.sections = {
      hero: document.querySelector('#hero'),
      about: document.querySelector('#about'),
      services: document.querySelector('#services'),
      benefits: document.querySelector('#benefits'),
      contact: document.querySelector('#contact')
    }
    this.defaultConfig = {
      distance: '20%',
      duration: 1000,
      delay: 200,
      reset: false
    }
  }

  animateHero() {
    window.ScrollReveal().reveal(this.sections.hero, {
      ...this.defaultConfig,
      origin: 'left'
    })
  }

  animateAbout() {
    window.ScrollReveal().reveal(this.sections.about, {
      ...this.defaultConfig,
      origin: 'right'
    })
  }

  animateServices() {
    window.ScrollReveal().reveal(this.sections.services, {
      ...this.defaultConfig,
      origin: 'bottom'
    })
  }

  animateBenefits() {
    window.ScrollReveal().reveal(this.sections.benefits, {
      ...this.defaultConfig,
      origin: 'left'
    })
  }

  animateContact() {
    window.ScrollReveal().reveal(this.sections.contact, {
      ...this.defaultConfig,
      origin: 'right'
    })
  }

  init() {
    if (window.ScrollReveal) {
      this.animateHero()
      this.animateAbout()
      this.animateServices()
      this.animateBenefits()
      this.animateContact()
    }
    return this
  }
}