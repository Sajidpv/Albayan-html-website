document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = new FormData(form);

        // Submit data to Google Forms
        fetch('https://docs.google.com/forms/d/e/1FAIpQLSd4An130TArr42VPaSJG3aa8TvMTr_a5e_CndjqbcJU1CRUCA/viewform?usp=sf_link', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully.');
                form.reset(); // Reset the form after successful submission
            } else {
                throw new Error('Failed to submit form.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, an error occurred. Please try again later.');
        });
    });
});
