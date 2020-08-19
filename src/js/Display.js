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
    const article = document.createElement("article");
    const section = document.createElement("section");
    const image = document.createElement("img");
    const quote = document.createElement("h1");
    const detail = document.createElement("p");

    article.classList.add("hero");
    image.classList.add("hero--img");
    section.classList.add("hero--text");

    image.src = "/img/william-barela-900.jpg";
    quote.innerText = "Hi! I'm William.";
    detail.innerHTML = `
      I'm a Full Stack Software Engineer and a former Linux System Admin.
      Thanks for stopping by. This page is currently under construction, but is soon to be fully functional.
    `
    section.appendChild(quote);
    section.appendChild(detail);

    article.appendChild(image);
    article.appendChild(section);

    this.main.appendChild(article);
  }
}

export { Display as default }
