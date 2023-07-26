const Contact = (() => {
    const content = document.querySelector('#content');
    const mainContact = document.createElement('div');
    mainContact.classList.add('mainContact');

    mainContact.innerHTML = 
    `
    <div class="contact">
        <div class="address-info">
            <h1>Address</h1>
            <h4>6699 Flapjack Avenue</h4>
            <h4>Chicago, IL 60007</h4>
        </div>
        <div class"contact-info">
            <h1>Contact Info</h1>
            <h4>Phone: (555)555-5555</h4>
            <h4>Email: bestpancakesever@pancakeria.com</h4>
        </div>
    </div>
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.43573823373!2d-87.89676986436452!3d41.83387098152595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1690371416616!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    `;
    

    content.appendChild(mainContact);

    return mainContact;
})

export default Contact;