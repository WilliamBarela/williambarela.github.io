class Display {
  constructor() {
    this.topNav = this.buildTopNav;
    this.main = document.querySelector("main");
  }

  get buildTopNav() {
    const header = document.querySelector("header");
    const nav = document.createElement("nav");
    const loader = document.querySelector(".loader");

    nav.innerHTML = `
      <a href="/"><img src="/img/wb-dark.svg" alt="William Barela Logo" id="wb-logo"></a>
      <div id="primary-navegation">
        <ul class="primary-navegation-content">
          <li><a href="">about</a></li>
          <li><a href="">projects</a></li>
          <li><a href="">skills</a></li>
          <li><a href="">blog</a></li>
        </ul>
      </div>
      <a href="#">
        <img src="/img/hamburger-light.svg" alt="Main Menu" id="hamburger">
        <img src="/img/close.svg" alt="Close" id="close" style="display: none">
      </a>
    `
    nav.id = "top-nav";
    header.appendChild(nav);

    loader.style.display = "none";

    return nav
  }

  get addNavListener() {
    const hamburger = this.topNav.querySelector("#hamburger");
    const close = this.topNav.querySelector("#close");
    const primaryNav = this.topNav.querySelector("#primary-navegation");

    hamburger.addEventListener("click", () => {
      hamburger.style.display = "none";
      close.style.display = "block";
      primaryNav.style.width = "100%";
    })

    close.addEventListener("click", () => {
      close.style.display = "none";
      primaryNav.style.width = "0%";
      hamburger.style.display = "block";
    })
  }

  get addHero() {
    const image = document.createElement("img");
    const quote = document.createElement("h1");
    const detail = document.createElement("p");

    image.src = "/img/william-barela-900.jpg";
    image.classList.add("hero");
    quote.innerText = "Hi! I'm William.";
    detail.innerHTML = `
      I'm a Full Stack Software Engineer and a former Linux System Admin.
      Thanks for stopping by. This page is currently under construction, but is soon to be fully functional.
    `

    this.main.appendChild(image);
    this.main.appendChild(quote);
    this.main.appendChild(detail);
  }
}

export { Display as default }
