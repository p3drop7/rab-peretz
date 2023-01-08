// NAV BAR
const navbar = document.querySelector('nav');
const navbarLink = document.querySelectorAll('.nav-link-selector')
const navExpandButton = document.querySelector('#nav-display-button')
const navCloseButton = document.querySelector('#nav-close-button')
const navLinks = document.querySelectorAll('nav a')

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

navLinks.forEach(item => {
    item.addEventListener('click', ()=>{
        navbar.classList.remove('nav-visible')
    })
});

// BOOK COMMENTS (Jquery)

//Book comment 1
$('#book-pic-1').click(()=> $('#book-comment-1').fadeIn('slow'));
$('#book-comment-1').click(()=> $('#book-comment-1').fadeOut('slow'));

//Book comment 2
$('#book-pic-2').click(()=> $('#book-comment-2').fadeIn('slow'));
$('#book-comment-2').click(()=> $('#book-comment-2').fadeOut('slow'));

//Book comment 3
$('#book-pic-3').click(()=> $('#book-comment-3').fadeIn('slow'));
$('#book-comment-3').click(()=> $('#book-comment-3').fadeOut('slow'));

// BOOK COMMENTS IN MOBILE DESIGN (Jquery)

//Book comment 1
$('#carrousel-book-1').click(()=> {
    $('#book-comment-1--mobile').fadeIn('slow')
    $('#carrousel-book-1').fadeOut('slow')
});
$('#book-comment-1--mobile').click(()=> {
    $('#book-comment-1--mobile').fadeOut('slow')
    $('#carrousel-book-1').fadeIn('slow')
})

//Book comment 2
$('#carrousel-book-2').click(()=> {
    $('#book-comment-2--mobile').fadeIn('slow')
    $('#carrousel-book-2').fadeOut('slow')
});
$('#book-comment-2--mobile').click(()=> {
    $('#book-comment-2--mobile').fadeOut('slow')
    $('#carrousel-book-2').fadeIn('slow')
})

//Book comment 3
$('#carrousel-book-3').click(()=> {
    $('#book-comment-3--mobile').fadeIn('slow')
    $('#carrousel-book-3').fadeOut('slow')
});
$('#book-comment-3--mobile').click(()=> {
    $('#book-comment-3--mobile').fadeOut('slow')
    $('#carrousel-book-3').fadeIn('slow')
})