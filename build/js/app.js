let menu = document.querySelector('.menu');
let menuLinks = document.querySelectorAll('.menu-link');
let underlineBar = document.querySelector('.header-underline-bar');
console.log(underlineBar);
menuLinks.forEach(link => {
  link.onmouseover = () => {
    underlineBar.style.left = link.offsetLeft + 'px';
    underlineBar.style.width = link.offsetWidth + 'px';
    console.log(link.offsetLeft);
  }
});
menu.onmouseleave = () => {
  underlineBar.style.width = 0;
}
