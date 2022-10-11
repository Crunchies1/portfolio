require('dotenv').config()
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init(process.env.EMAIL_INIT);
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm(process.env.SERVICE_KEY, process.env.TEMPLATE_KEY, this)
            .then(function() {
                document.getElementById("contact-form").reset();
                alert("Email successfully sent!")
                console.log('Email sent successfully!');
            }, function(error) {
                alert("Error in sending email. Check console logs for more details.")
                console.log('Error in sending email: ', error);
            });
    });
}