export class ScrollAnimation {
  constructor() {
    this.sections = {
      hero: document.querySelector('#hero'),
      about: {
        title: document.querySelector('.about-title'),
        cv: document.querySelector('.about-cv'),
        text: document.querySelector('.about-description-text'),
        ilustration: document.querySelector('.about-description-ilustration'),
        cta: document.querySelector('#about-cta'),
        ctaButton: document.querySelector('#services-cta')
      },
      services: {
        title: document.querySelector('.services-title'),
        subtitle: document.querySelector('.service-content h3'),
        description: document.querySelector('.service-content p'),
        slide: document.querySelector('.slide-container'),
        cta: document.querySelector('.services-cta')
      },
      benefits: {
        title: document.querySelector('.benefits-title'),
        description: document.querySelector('.benefits-description'),
        benefits: document.querySelector('.therapy-types'),
        cta: document.querySelector('.cta-section')
      },
      contact: {
        title: document.querySelector('.contact-title'),
        text: document.querySelector('.contact-text'),
        cta: document.querySelector('.contact-actions'),
        ilustration: document.querySelector('.contact-ilustration')
      }
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
      duration: 3000,
    })
  }

  animateAbout() {
    window.ScrollReveal().reveal(this.sections.about.title, {
      ...this.defaultConfig,
      origin: 'left',
      duration: 2000
    }),
    window.ScrollReveal().reveal(this.sections.about.cv, {
      ...this.defaultConfig,
      origin: 'left',
      duration: 2000,
      delay: 300
    }),
    window.ScrollReveal().reveal(this.sections.about.text, {
      ...this.defaultConfig,
      origin: 'left',
      duration: 2000,
      delay: 400
    }),
    window.ScrollReveal().reveal(this.sections.about.ilustration, {
      ...this.defaultConfig,
      origin: 'right',
      duration: 2000,
    }),
    window.ScrollReveal().reveal(this.sections.about.cta, {
      ...this.defaultConfig,
      origin: 'left',
      duration: 2000
    })
  }

  animateServices() {
    window.ScrollReveal().reveal(this.sections.services.title, {
      ...this.defaultConfig,
      origin: 'right',
      duration: 2000
    }),
    window.ScrollReveal().reveal(this.sections.services.subtitle, {
      ...this.defaultConfig,
      duration: 2000,
      delay: 300
    }),
    window.ScrollReveal().reveal(this.sections.services.description, {
      ...this.defaultConfig,
      duration: 2000,
      delay: 400
    }),
    window.ScrollReveal().reveal(this.sections.services.slide, {
      ...this.defaultConfig,
      duration: 2000,
      delay: 500
    }),
    window.ScrollReveal().reveal(this.sections.services.cta, {
      ...this.defaultConfig,
      origin: 'right',
      duration: 2000
    }),
    window.ScrollReveal().reveal(this.sections.about.ctaButton, {
      ...this.defaultConfig,
      origin: 'right',
      duration: 2000
    })	
  }

  animateBenefits() {
    window.ScrollReveal().reveal(this.sections.benefits.title, {
      ...this.defaultConfig,
      origin: 'left',
      duration: 3000,
      delay: 300
    }),
    window.ScrollReveal().reveal(this.sections.benefits.description, {
      ...this.defaultConfig,
      origin: 'left',
      duration: 3000,
      delay: 400
    }),
    window.ScrollReveal().reveal(this.sections.benefits.benefits, {
      ...this.defaultConfig,
      origin: 'bottom',
      duration: 3000,
      delay: 500
    }),
    window.ScrollReveal().reveal(this.sections.benefits.cta, {
      ...this.defaultConfig,
      origin: 'bottom',
      duration: 3000,
      delay: 600
    })
  }

  animateContact() {
    window.ScrollReveal().reveal(this.sections.contact.title, {
      ...this.defaultConfig,
      origin: 'bottom',
      duration: 3000
    }),
    window.ScrollReveal().reveal(this.sections.contact.text, {
      ...this.defaultConfig,
      origin: 'bottom',
      duration: 3000,
      delay: 300
    }),
    window.ScrollReveal().reveal(this.sections.contact.cta, {
      ...this.defaultConfig,
      origin: 'bottom',
      duration: 3000,
      delay: 400
    }),
    window.ScrollReveal().reveal(this.sections.contact.ilustration, {
      ...this.defaultConfig,
      origin: 'bottom',
      duration: 3000,
      delay: 400
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