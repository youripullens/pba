// Initialize all functionality when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Email protection functionality
    const protectEmails = () => {
        const emailElements = document.querySelectorAll('.protected-email');
        if (emailElements.length === 0) return;

        emailElements.forEach(element => {
            const user = element.getAttribute('data-user');
            const domain = element.getAttribute('data-domain');
            if (user && domain) {
                const emailAddress = `${user}@${domain}`;
                element.innerHTML = `<a href="mailto:${emailAddress}">${emailAddress}</a>`;
            }
        });
    };

    // Contact form functionality
    const setupContactForm = () => {
        const form = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');

        if (!form || !formMessage) return;

        form.addEventListener('submit', () => {
            // Add loading state
            form.classList.add('form-loading');

            // Clear previous messages
            formMessage.classList.remove('success', 'error');
            formMessage.textContent = '';

            // Form submission is handled by Web3Forms
            // No need for additional code here
        });

        // Check for success parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            formMessage.textContent = 'Uw bericht is succesvol verzonden. Wij nemen zo spoedig mogelijk contact met u op.';
            formMessage.classList.add('success');
        }
    };

    // Set viewport height variable for mobile browsers
    const setViewportHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initialize all functions
    protectEmails();
    setupContactForm();
    setViewportHeight();

    // Update viewport height on resize
    window.addEventListener('resize', setViewportHeight);
});