let registrarme= document.getElementById('registrarme');
let slicks = document.getElementById('slicks');
let btns = document.getElementById('btns-registro');
$('.slick-slider').slick({
    dots: true,
    fade: true,
    arrows: false,
    mobileFirst: true,
});

registrarme.addEventListener('click',()=>{
    slicks.style.display='none';
    btns.style.display='block';
})