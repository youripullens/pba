// prevent email snooping
document.addEventListener('DOMContentLoaded', function () {
    const emailElements = document.querySelectorAll('.protected-email');
    emailElements.forEach(function (element) {
        const user = element.getAttribute('data-user');
        const domain = element.getAttribute('data-domain');
        element.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
    });
});