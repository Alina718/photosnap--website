const overlay = document.querySelector('.overlay');
const mobileBtn = document.getElementById('mobile-button');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

mobileBtn.addEventListener('click', () => {
    if(overlay.style.height !=  "100%" &&
        mobileMenu.style.height != mobileMenu.scrollHeight) {
        overlay.style.height = '100%';
        mobileMenu.style.height = mobileMenu.scrollHeight + "px";
        mobileBtn.classList.add('active');
        body.classList.toggle('overflow');
    } else {
        overlay.style.height = "0px";
        mobileMenu.style.height = "0px";
        mobileBtn.classList.remove('active');
        body.classList.remove('overflow');
    }
})



