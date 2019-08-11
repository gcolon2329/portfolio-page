$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);

    });

    $('.up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

});


const texts = ['Designer','Developer','Creator','HTML','CSS','Javascript','Python'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);


    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 400);

}());

function bgChanger(){
    if(this.scrollY > this.innerHeight / 2) {
        document.body.classList.add('bg-active');
    }else {
        document.body.classList.remove('bg-active');
    };

}

window.addEventListener('scroll',bgChanger);

     
