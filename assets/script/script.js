
// Initialize Animation On Scroll

AOS.init();

//Progress Bar function

function progress_bar() {
    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach((bar) => {
        let val = parseInt(bar.getAttribute("value"));
        const stop = parseInt(bar.getAttribute("max"));
        bar.value = 0;

        const interval = setInterval(() => {
            if (bar.value >= val) {
                clearInterval(interval);
            } else {
                bar.value++;
            }
        }, 30);
    });
}

//Calling Function

progress_bar();

// Show button on scroll

window.onscroll = function () {
    const topBtn = document.getElementById("BackToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Smooth scroll to top on click

document.getElementById("BackToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


//loading logic

window.addEventListener("load", ()=>{
    const loader = document.querySelector("#loader");
    loader.style.display = "none"
})