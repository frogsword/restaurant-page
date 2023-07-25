const Menu = (() => {
    const content = document.querySelector('#content');
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('mainMenu');

    mainMenu.innerHTML = 
    `<h1>Comes in full stack (3 cakes) or short stack (2 cakes).</h1>
    <div class='menu-item'>Buttermilk Pancake</div>
    <div class='menu-item'>Chocolate Pancake</div>
    <div class='menu-item'>Blueberry Pancake</div>
    <div class='menu-item'>Strawberry Shortcake Pancake</div>`

    content.appendChild(mainMenu);

    return mainMenu;
})

export default Menu;