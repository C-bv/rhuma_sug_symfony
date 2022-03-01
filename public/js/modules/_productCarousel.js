export default function productCarousel() {

    const carouselContainer = document.querySelector("#carousel_container"),
        chevronContainer = document.createElement("div"),
        chevronLeft = document.createElement("i"),
        chevronRight = document.createElement("i");

    chevronLeft.classList.add("far", "fa-chevron-left", "prev");
    chevronRight.classList.add("far", "fa-chevron-right", "next");

    carouselContainer.appendChild(chevronContainer);
    chevronContainer.appendChild(chevronLeft);
    chevronContainer.appendChild(chevronRight);

    
    chevronLeft.addEventListener("click", function () {
        update(-1);
    })
    
    
    chevronRight.addEventListener("click", function () {
        update(1);
    })
    
    
    let productImgSlides = document.querySelector("#carousel_img_container").children,
        productTextSlides = document.querySelector('section').children,
        slideIndex = 0;
        
    showproductImgSlides(slideIndex);

    function showproductImgSlides(n) {
        if (n > productImgSlides.length -1){ slideIndex = 0 };
        if (n < 0) { slideIndex = productImgSlides.length -1};
        
        if (productImgSlides[slideIndex].classList.value == 'slide_out') {
            productImgSlides[slideIndex].classList.remove("slide_out");
        }

        for (let i = 0 ; i < productImgSlides.length ; i++) {
            productImgSlides[i].style.display = "none";
            productTextSlides[i].style.display = "none";
        }

        productImgSlides[slideIndex].classList.add('slide_in');
        productTextSlides[slideIndex].style.display = "flex";
    }

    function update(n) {
        
        productImgSlides[slideIndex].classList.remove("slide_in");
        productImgSlides[slideIndex].classList.add("slide_out");
        productTextSlides[slideIndex].classList.add("fade_out");        

        showproductImgSlides(slideIndex += n);
        let removeSlideOut = document.querySelector(".slide_out"),
            removeFadeOut = document.querySelector(".fade_out");

        removeSlideOut.addEventListener("animationend", function () {
            removeSlideOut.classList.remove("slide_out");

        });
        removeFadeOut.addEventListener("animationend", function () {
            removeFadeOut.classList.remove("fade_out");
        });
    }
}