const Menu = (() => {
    const content = document.querySelector('#content');
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('mainMenu');

    mainMenu.innerHTML = 
    `
        <h1>Pancakes</h1>
        <div class='menu-item'>
            Buttermilk 
            <div class="menu-item-price">$7.99</div>
        </div>
        <div class='menu-item'>
            Chocolate Chip
            <div class="menu-item-price">$7.99</div>
        </div>
        <div class='menu-item'>
            Peanut Butter
            <div class="menu-item-price">$7.99</div>
        </div>
        <div class='menu-item'>
            Birthday Cake
            <div class="menu-item-price">$8.49</div>
        </div>
        <div class='menu-item'>
            Cinnamon Bun
            <div class="menu-item-price">$8.49</div>
        </div>
        <div class='menu-item'>
            Pecan
            <div class="menu-item-price">$7.99</div>
        </div>
        <div class='menu-item'>
            Blueberry
            <div class="menu-item-price">$8.49</div>
        </div>
        <div class='menu-item'>
            Strawberry
            <div class="menu-item-price">$8.49</div>
        </div>
        <div class='menu-item' id="last-item">
            Protein
            <div class="menu-item-price">$9.49</div>
        </div>
    `

    content.appendChild(mainMenu);

    return mainMenu;
})

export default Menu;