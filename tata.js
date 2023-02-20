const navslide= () => {
    const bars=document.querySelector('.som');
    const nav = document.querySelector('.nav-links');
   
    
    bars.addEventListener('click',()=>{
        // toogle effect
        nav.classList.toggle('nav-active');
     });
}

navslide();
