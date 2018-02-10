document.getElementsByClassName("btn-action")[0].addEventListener("click", function(){
    document.getElementsByClassName("modal-overlay")[0].classList.add("active");
    document.getElementsByClassName("modal")[0].classList.add("active");
});

document.getElementsByClassName("modal-close")[0].addEventListener("click", function(){
    document.getElementsByClassName("modal-overlay")[0].classList.remove("active");
    document.getElementsByClassName("modal")[0].classList.remove("active");
});