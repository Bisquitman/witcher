const burgerMenu = (option) => {
  const {
    selectorBurger = '.burger',
    burgerActiveClass = 'burger_active',
    selectorMenu,
    menuActiveClass
  } = option;

  const burger = document.querySelector(selectorBurger);
  const menu = document.querySelector(selectorMenu);

  burger.addEventListener('click', () => {
    burger.classList.toggle(burgerActiveClass);
    menu.classList.toggle(menuActiveClass);
  });
};

export default burgerMenu;