'use strict'

const btnHeader = document.querySelector('.header');

// smooth scrolling of sections
btnHeader.addEventListener('click',function(e){
    if (e.target.classList.contains("main-nav-link")){
        const id = `.${e.target.getAttribute('id')}`;
        document.querySelector(id).scrollIntoView({behavior : 'smooth'});
    }
})
