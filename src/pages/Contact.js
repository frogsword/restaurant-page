const Contact = (() => {
    const content = document.querySelector('#content');
    const mainContact = document.createElement('div');
    mainContact.classList.add('mainContact');

    mainContact.innerHTML = '<h1>Hello</h1>';
    

    content.appendChild(mainContact);

    return mainContact;
})

export default Contact;