const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav')
const title = document.querySelector('.title')
const menu_link = document.querySelectorAll('.menuItem')
menu_btn.addEventListener('click',function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    title.classList.toggle('title-is-active');
   
})
menu_link.forEach(function(elem){
    elem.addEventListener('click',function(){
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
        title.classList.remove('title-is-active');
    })
})
gsap.from('.middle-wrapper',{cssRule: {opacity: 0},duration:1.5,y:-50,ease:'power3.inOut'})
gsap.from('.top-wrapper',{cssRule: {opacity: 0},duration:1.5,x:-20})
gsap.from('.last-wrapper',{cssRule: {opacity: 0},duration:1.5,x:50})


gsap.to('.image-1',{
    scrollTrigger:{
        scrub:1
    },x:-10,
});
gsap.to('.image-2',{
    scrollTrigger:{
        scrub:1
    },x:10,
});
gsap.to('.image-3',{
    scrollTrigger:{
        scrub:1
    },x:10,
});