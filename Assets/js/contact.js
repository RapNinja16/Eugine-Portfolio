const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    //serviceID - TemplateID - #form - publicKey
    emailjs.sendForm("service_00xatka","template_b209yxf","#contact-form","U4X8RAU6_m9NHa7ZU")
    .then(() => {
        // Show Sent Message
        contactMessage.textContent = 'Message Sent Successfully!'

        // Terminates the Message after 5s
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clears the Form
        contactForm.reset()
    }, () =>{
        //show error message
        contactMessage.textContent = 'Message not sent (service error)'
    })

}

contactForm.addEventListener('submit', sendEmail)