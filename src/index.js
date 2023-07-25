import './scss/styles.scss';
import "bootstrap/dist/js/bootstrap.min";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

const MainContent = (() => {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);

    content.appendChild(Navbar());

    const backgroundWrapper = document.createElement('div');
    backgroundWrapper.classList.add('background-wrapper');
    const background = document.createElement('div');
    background.classList.add('background');

    content.appendChild(backgroundWrapper);
    backgroundWrapper.appendChild(background);

    Home();
    Menu();
    Contact();

    return {content};
})();

const Navigate = (() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const mainBrand = document.querySelector('.navbar-brand');
    const mainHome = document.querySelector('.mainHome');
    const mainMenu = document.querySelector('.mainMenu');
    const mainContact = document.querySelector('.mainContact');

    mainBrand.addEventListener('click', function() {
        mainHome.style = 'opacity: 100; z-index: 1;';
        mainMenu.style = 'opacity: 0;';
        mainContact.style = 'opacity: 0;';
        navLinks[0].style = 'color: white';
        navLinks[1].style = 'color: black';
        navLinks[2].style = 'color: black;';
    })

    navLinks[0].addEventListener('click', function() {
        mainHome.style = 'opacity: 100; z-index: 1;';
        mainMenu.style = 'opacity: 0;';
        mainContact.style = 'opacity: 0;';
        navLinks[0].style = 'color: white';
        navLinks[1].style = 'color: black';
        navLinks[2].style = 'color: black;';
    })

    navLinks[1].addEventListener('click', function() {
        mainMenu.style = 'opacity: 100; z-index: 1;';
        mainHome.style = 'opacity: 0;';
        mainContact.style = 'opacity: 0;';
        navLinks[1].style = 'color: white;';
        navLinks[0].style = 'color: black;';
        navLinks[2].style = 'color: black;';
    })

    navLinks[2].addEventListener('click', function() {
        mainContact.style = 'opacity: 100; z-index: 1;';
        mainHome.style = 'opacity: 0;';
        mainMenu.style = 'opacity: 0;';
        navLinks[2].style = 'color: white;';
        navLinks[1].style = 'color: black;';
        navLinks[0].style = 'color: black;';
    })
})(); 