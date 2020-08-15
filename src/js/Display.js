class Display {
  constructor() {
    this.topNav = this.buildTopNav;
  }

  get buildTopNav() {
    const header = document.querySelector("header");
    const nav = document.createElement("nav");

    nav.innerHTML = `
      <a href="/"><img src="/img/wb-light.svg" alt="William Barela Logo" id="wb-logo"></a>
      <ul id="primary-navegation"></ul>
      <a href="#">
        <img src="/img/hamburger-thin.svg" alt="Main Menu" id="hamburger">
      </a>
    `
    nav.id = "top-nav";
    header.appendChild(nav);

    return nav
  }

  get addNavListener () {
  }
}

export { Display as default }
