const navbar = document.querySelector('nav');
const navbarLink = document.querySelectorAll('.nav-link-selector')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100 ) {
        navbar.classList.add('transparent-nav');

        navbarLink.forEach(item => {
            item.classList.add('transparent-nav-link')
        });
          
    } else if (window.scrollY <= 100) {
        navbar.classList.remove('transparent-nav');

        navbarLink.forEach(item => {
            item.classList.remove('transparent-nav-link')
        });
    }
});