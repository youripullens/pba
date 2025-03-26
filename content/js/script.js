// prevent email snooping
document.addEventListener('DOMContentLoaded', function () {
    const emailElements = document.querySelectorAll('.protected-email');
    emailElements.forEach(function (element) {
        const user = element.getAttribute('data-user');
        const domain = element.getAttribute('data-domain');
        element.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        // Add loading state
        form.classList.add('form-loading');

        // Remove message classes
        formMessage.classList.remove('success', 'error');
        formMessage.textContent = '';

        // TODO: Client-side validation here

        // Form submission will be handled by Web3Forms
        setTimeout(function() {
            // This timeout is just for demo purposes
            // Web3Forms will handle the actual redirect
        }, 1000);
    });

    // Check for URL parameters to show success message if redirected back
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        formMessage.textContent = 'Uw bericht is succesvol verzonden. Wij nemen zo spoedig mogelijk contact met u op.';
        formMessage.classList.add('success');
    }
});