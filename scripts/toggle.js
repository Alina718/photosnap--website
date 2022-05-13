const toggle = document.querySelector('input[type="checkbox"]');
const perMonthPrice = document.querySelectorAll('.per-month');
const perYearPrice = document.querySelectorAll('.per-year');

function changePrice() {
    if(toggle.checked) {
        perMonthPrice.forEach(price => {
            price.style.display = "none";
        })
        
        perYearPrice.forEach(price => {
            price.style.display = "block";
        })
    } else {
        perMonthPrice.forEach(price => {
            price.style.display = "block";
        })
        
        perYearPrice.forEach(price => {
            price.style.display = "none";
        })
    }
}

toggle.addEventListener('click', changePrice);

const inviteButtons = document.querySelectorAll('.invite-btn[data-goto]');

function scrollToAppSection(e, button) {
    const link = e.target;
        
        if(button.dataset.goto 
            && document.querySelector(button.dataset.goto)) {
                const goToBlock = document.querySelector(button.dataset.goto);
                const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.pricing-container').offsetHeight;

                window.scrollTo({
                    top: goToBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
        }
}

inviteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        scrollToAppSection(e, button);
    });
});
