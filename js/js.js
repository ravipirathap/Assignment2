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
//map start
    // Inita map
    function initMap() {
    //map location
    var center = {lat: 37.7749, lng: -122.4194};
    // The map options
    var options = {
    zoom: 20,
    center: center
    };
    // Create a new map
    var map = new google.maps.Map(document.getElementById("map"), options);
    }
//map end
//form start
function validate(){
    var fn=document.getElementById("fn").value;
    var ln=document.getElementById("ln").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var re1=/^[A-Za-z.]{2,23}$/;
    var re2= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var re4=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if (re1.test(fn)){
        document.getElementById("t1").innerHTML=""; 
    }else{
        document.getElementById("t1").innerHTML="Name must be between 2 and 23 characters";
    }
    if (re1.test(ln)){
        document.getElementById("t2").innerHTML=""; 
    }else{
        document.getElementById("t2").innerHTML="Name must be between 2 and 23 characters";
    }
    if(re2.test(email)){
        document.getElementById("t3").innerHTML=""; 
    }else{
        document.getElementById("t3").innerHTML="Email is invalid";
    }
    if(re4.test(phone)){
        document.getElementById("t4").innerHTML=""; 
    }else{
        document.getElementById("t4").innerHTML="Phone Number is invalid";
        return false
    }
        
 }
//form end
//error 404
// Get the "service" link
var serviceLink = document.querySelector("#error");

// Add an event listener to the link
serviceLink.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the default behavior of the link
  
  // Change the URL path to "/404"
  window.history.pushState({}, "", "/404");

  // Write the 404 error message
  document.write("404: Page Not Found");
});
//page loader
    const loader = document.getElementById("loader");
    window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.display = "none";
        content.style.display = "block";
    }, 1000);
    });
//page loader
