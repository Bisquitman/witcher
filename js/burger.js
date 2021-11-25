const burgerMenu = (selectorBurger, selectorMenu, burgerActiveClass, menuActiveClass) => {
  const burger = document.querySelector(selectorBurger);
  console.log('burger: ', burger);
  const menu = document.querySelector(selectorMenu);
  console.log('menu: ', menu);

  burger.addEventListener('click', () => {
    burger.classList.toggle(burgerActiveClass);
    menu.classList.toggle(menuActiveClass);
  });
}

export default burgerMenu;