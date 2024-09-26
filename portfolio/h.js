// Smooth scroll functionality for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling (dummy example)
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Dummy validation (basic example)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Dummy submission (console log, replace with actual submission logic)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields (optional)
    form.reset();

    // Show success message or redirect to a thank you page
    alert('Message sent successfully!');
});
