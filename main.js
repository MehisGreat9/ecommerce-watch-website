// scroll reveal animation
const revealElements = document.querySelectorAll("[data-reveal]");
const scrollReveal = function(){
    for (let i = 0; i < revealElements.length; i++){
        const elementsonScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;
        if(elementsonScreen){
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
}
window.addEventListener("scroll", scrollReveal);
scrollReveal();

// back to top
const backtoTop = document.querySelector("[data-back-top]");
window.addEventListener("scroll", function (){
    const bodyHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollEndPos = bodyHeight - windowHeight;
    const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;
    backtoTop.textContent = `${totalScrollPercent.toFixed(0)}%`;

    if (totalScrollPercent > 5){
        backtoTop.classList.add('show');
    } else {
        backtoTop.classList.remove('show');
    }
});