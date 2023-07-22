import './style.css';

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('h1');
    logo.innerHTML = 'Restaurant';
    header.appendChild(logo);

    const links = document.createElement('div');
    links.classList.add('links');
    const menuLink = document.createElement('h2');
    menuLink.innerHTML = 'Menu';
    const contactLink = document.createElement('h2');
    contactLink.innerHTML = 'Contact';
    links.appendChild(menuLink);
    links.appendChild(contactLink);
    header.appendChild(links);

    return header;
}

content.appendChild(Header());