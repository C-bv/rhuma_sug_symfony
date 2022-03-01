export default function navBarSlider(){

    const linkToggle = document.querySelectorAll('.js_toggle'),
        toggleContainer = document.querySelectorAll('.toggle_container');
    
    for(let i = 0; i < linkToggle.length; i++){
        linkToggle[i].addEventListener("mouseover", function(){
            mouseOver(i);
        });
        linkToggle[i].addEventListener("mouseout", function(){
            mouseOut(i);
        });
    };
    
    function mouseOver(arg){
        if (!toggleContainer[arg].classList.contains('active')) {
            
            linkToggle[arg].classList.add('active');
            toggleContainer[arg].classList.add('active');
            toggleContainer[arg].style.width = 'auto';
    
            let width = toggleContainer[arg].clientWidth + 'px';
    
            toggleContainer[arg].style.width = '0px';
    
            setTimeout(function () {
                toggleContainer[arg].style.width = width;
            },0);
        };
    };
    
    function mouseOut(arg){
        if (toggleContainer[arg].classList.contains('active')) {
    
            toggleContainer[arg].style.width = '0px';
            linkToggle[arg].classList.remove('active');
    
            setTimeout(function () {
                toggleContainer[arg].classList.remove('active');
            },250);
        };
    };
}