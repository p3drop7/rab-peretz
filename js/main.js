const navbar = document.querySelector('nav');
const navbarLink = document.querySelectorAll('.nav-link-selector')
const navExpandButton = document.querySelector('#nav-display-button')
const navCloseButton = document.querySelector('#nav-close-button')

window.addEventListener('scroll', () => {
    if(screen.width > 769){
        
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
    }
});

navExpandButton.addEventListener('click', ()=>{
    navbar.classList.add('nav-visible')
})

navCloseButton.addEventListener('click', ()=> {
    navbar.classList.remove('nav-visible')
})