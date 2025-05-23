export class MenuMobile {
  constructor(menu, navbar) {
    this.menu = menu
    this.navbar = navbar
    this.navList = navbar.querySelector('#nav-list')
    this.navLinks = navbar.querySelectorAll('#nav-list a')
    this.headerContainer = document.querySelector('.header-container')

    this.handleClick = this.handleClick.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.fixNavbar = this.fixNavbar.bind(this)
  }

  handleClick() {
    this.navbar.classList.toggle('active')
  }

  closeMenu() {
    this.navbar.classList.remove('active')
  }

  fixNavbar() {
    if (window.pageYOffset > 80) {
      this.headerContainer.classList.add('fixed-nav')
    } else {
      this.headerContainer.classList.remove('fixed-nav')
    }
  }

  addScrollListener() {
    window.addEventListener('scroll', this.fixNavbar)
  }

  addLinkListeners() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', this.closeMenu)
    })
  }

  init() {
    if (this.menu) {
      this.menu.addEventListener('click', this.handleClick)
      this.addLinkListeners()
      this.addScrollListener()
    }
    return this
  }
}