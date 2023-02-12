// active start
    document.getElementById("active1").addEventListener("click",function(){
    document.getElementById("active1").classList.add("active")
    });
//active end
// Mouseover
    var button1=document.getElementById("btn1");
    button1.addEventListener("mouseover", function() {button1.style.backgroundColor="blue"})
    var button2=document.getElementById("btn2");
    button2.addEventListener("mouseover", function() {button2.style.backgroundColor="blue"})
//Mouseover end
//caurosel start
    let slideIndex = 0;
    showSlides();

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000);
    }
//caurosel end
//zoom in zoom out
    function zoom(){
        document.querySelector("#anime").style.transform = "scale(1.5)";
    }
    function zoomout(){
        document.querySelector("#anime").style.transform = "scale(1)";
    }
//zoom in zoom out end