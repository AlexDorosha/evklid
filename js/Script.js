// Burger

let burger = document.querySelector('.nav-burger')
let close__btn = document.querySelector('.nav-close')
let menu = document.querySelector('.header-nav-list')
let link = document.querySelector('.header-nav-list-item-link')

burger.addEventListener('click',
    function() {
        menu.classList.toggle('active');
        document.body.classList.add('stop-scroll');
})

close__btn.addEventListener('click',
    function() {
        menu.classList.toggle('active');
        document.body.classList.remove('stop-scroll');
});

document.addEventListener('click', function(e) {
    let target = e.target;
    if (!target.closest('.header-content')) {
        menu.classList.remove('active');
}
});


// Swiper

const swiper = new Swiper('.swiper-hero', {
    slidesPerView: 1,
    loop: true,
    speed: 300,
    pagination: {
      el: '.hero-pagination',
      type: 'bullets',
      clickable: true
    }
});

// Tabs

document.querySelectorAll('.how-steps-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.how-steps-btn').forEach(function(btn) {
            btn.classList.remove('how-steps-btn__active')
        });
        e.currentTarget.classList.add('how-steps-btn__active');
        document.querySelectorAll('.how-contant').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('how-contant__active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('how-contant__active')
    });
});

// Accordion

$( function() {
    $( ".accordion" ).accordion({
       icons: false,
       heightStyle: "content",
       collapsible: true,
       active: false
     });    
} );

// Search-form

document.querySelector('.search-btn').addEventListener('click', 
    function() {
        document.querySelector('.search-form-open').classList.add('search-form-open__active');
        this.classList.add('search-btn__active');
  })
  
document.addEventListener('click', function(e) {
    let target = e.target;
    let form = document.querySelector('.search-form-open');
    if (!target.closest('.header-nav')) {
        form.classList.remove('search-form-open__active');
        form.querySelector('input').value = '';
        document.querySelector('.search-btn').classList.remove('search-btn__active')
}})

document.querySelector('.search-btn-close').addEventListener('click', 
    function() {
        document.querySelector('.search-form-open').classList.remove('search-form-open__active');
        document.querySelector('.search-btn').classList.remove('search-btn__active');
  })