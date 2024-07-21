const backBtn = document.getElementById("back-to-top");
backBtn.addEventListener('click', backToTop);
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backBtn.style.display = "block";
    } else {
        backBtn.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
