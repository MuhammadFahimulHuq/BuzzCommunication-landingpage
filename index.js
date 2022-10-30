const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav')
const title = document.querySelector('.title')
menu_btn.addEventListener('click',function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    title.classList.toggle('title-is-active');
})

gsap.from('.middle-wrapper',{opactiy:0,duration:1.5,y:-50,ease:'Power2.easeInOut'})
gsap.from('.top-wrapper',{opactiy:0,duration:1.5,x:-50})
gsap.from('.last-wrapper',{opactiy:0,duration:1.5,x:50})


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