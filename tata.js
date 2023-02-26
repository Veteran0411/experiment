const navslide= () => {
    const bars=document.querySelector('.som');
    const nav = document.querySelector('.nav-links');
   
    
    bars.addEventListener('click',()=>{
        // toogle effect
        nav.classList.toggle('nav-active');
     });
}

navslide();

// for sliding effect
var swiper = new Swiper(".team-slid", {
    loops:true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints:{
        "0": {
        slidesPerView: 1,
        autoplay:{
            delay:100,
            disableOnInteraction:false,
        },

    },
    "768":{
        slidesPerView:2,
    },
    "1024":{
        slidesPerView:3,
    },
},
  });
