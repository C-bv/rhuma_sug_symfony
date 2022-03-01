export default function pageLoader(){
    
    const aside = document.querySelector("aside"),
        article = document.querySelector("article"),
        divBackground = document.querySelector("#for_background"),
        loaderVideo = document.querySelector("#loader"),
        loaderWrapper = document.querySelector("#loader_wrapper"),
        closeLoader = document.querySelector("#close_loader");

    if(!sessionStorage.getItem("visited")){
        hideElements();
        closeLoader.addEventListener("click", showElements);
        loaderVideo.onplay = function(){
            loaderWrapperFade();
            loaderVideo.addEventListener('ended',showElements,false);
            sessionStorage.setItem("visited",true);
        };
    };
    
    function hideElements() {
        loaderWrapper.style.display = "flex";

        aside.style.bottom = "150%";
        article.style.left = "100%";
        divBackground.style.bottom = "-100%";
        
        aside.classList.add("loader_delay1");
        article.classList.add("loader_delay2");
        divBackground.classList.add("loader_delay3");
    };

    function showElements() {
        aside.style.bottom = "0%";
        article.style.left = "0%";
        divBackground.style.bottom = "0%";

        loaderWrapper.style.display = "none";
    };

    function loaderWrapperFade(){
        setTimeout(function() {
            loaderVideo.classList.add("loader_blur");
        }, 3000);
        setTimeout(function() {
            loaderVideo.classList.add("loader_out");
        }, 4500);
    };
}