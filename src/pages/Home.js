const Home = (() => {
    const content = document.querySelector('#content');
    const mainHome = document.createElement('div');
    mainHome.classList.add('mainHome');

    mainHome.innerHTML = 
        `<h1>The cakes of dreams reside here.</h1>
        <button class="orderButton">Order Online</button>`;
    //link colorS
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.style = 'color: black;'
    })
    const homeLink = document.querySelectorAll('.nav-link')[0];
    homeLink.style = 'color: white;'

    content.appendChild(mainHome);

    return mainHome;
})

export default Home;