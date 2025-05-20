document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('span');
    const originalText = btnText.textContent;
    
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';

    // EmailJS parameters
    const templateParams = {
        from_name: this.user_name.value,
        from_email: this.user_email.value,
        message: this.message.value
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(() => {
            alert('Message sent successfully!');
            this.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        })
        .finally(() => {
            submitBtn.disabled = false;
            btnText.textContent = originalText;
        });
});

// CTA Button functionality
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    const cvFile = this.getAttribute('href');
    if (!cvFile || !cvFile.includes('CV_ALISHA_BUKHSH.docx')) {
        e.preventDefault();
        alert('CV file is being updated. Please try again later.');
    }
});

// GitHub button click tracking
document.querySelector('.btn-secondary').addEventListener('click', function() {
    console.log('GitHub profile visited');
});

// Add hover animations to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 123, 255, 0.5)';
    });

    button.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0, 123, 255, 0.3)';
    });
});

// Mobile menu toggle with overlay
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const menuOverlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuOverlay.classList.toggle('show');
});

// Close menu when clicking overlay
menuOverlay.addEventListener('click', () => {
    navMenu.classList.remove('show');
    menuOverlay.classList.remove('show');
});

// Close menu when clicking links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        menuOverlay.classList.remove('show');
    });
});

// Close menu when pressing escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('show');
        menuOverlay.classList.remove('show');
    }
});