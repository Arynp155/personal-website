const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.Pages');
    const navLinks = document.querySelectorAll('.Pages li');
    const x = document.querySelectorAll('.mid-body');
    const name = document.querySelectorAll('.pages li .trial');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        if (box.style.display == 'none') {
            x.style.display = 'block';
            name.innerHtml = 'hide div';
          } else {
            x.style.display = 'none';
            name.innerHtml = 'show div';
          }
    });

    navLinks.forEach((link, index)=>{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +2.3}s`;
    });
}
navSlide();