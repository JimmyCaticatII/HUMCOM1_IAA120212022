function currentTime () {
    
    let date = new Date();

    let timePH = date.toLocaleTimeString();

    let time = "PH Time: " + timePH + " |";

    document.getElementById("clock").innerHTML = time;
    setTimeout(function() {currentTime()}, 1000);

}

currentTime();

function currentTimeNZ () {
    
    let date = new Date();

    let timeNZ = date.toLocaleTimeString("en-US", {timeZone: "Pacific/Auckland"});

    let time = "| NZ Time: " + timeNZ;

    document.getElementById("clockNZ").innerHTML = time;
    setTimeout(function() {currentTimeNZ()}, 1000);

}

currentTimeNZ();

let slideIndex = 1;
showSlides(slideIndex);
showSlides2(slideIndex);
showSlides3(slideIndex);
showSlides4(slideIndex);
showSlides5(slideIndex);
showSlides6(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function plusSlides2(n) {
    showSlides2(slideIndex += n);
}
function plusSlides3(n) {
    showSlides3(slideIndex += n);
}
function plusSlides4(n) {
    showSlides4(slideIndex += n);
}
function plusSlides5(n) {
    showSlides5(slideIndex += n);
}
function plusSlides6(n) {
    showSlides6(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}
function currentSlide2(n) {
showSlides2(slideIndex = n);
}
function currentSlide3(n) {
showSlides3(slideIndex = n);
}
function currentSlide4(n) {
showSlides4(slideIndex = n);
}
function currentSlide5(n) {
showSlides5(slideIndex = n);
}
function currentSlide6(n) {
showSlides6(slideIndex = n);
}

function showSlides(n) {

    let i;

    let slides = document.getElementsByClassName("mySlides");

    let dots = document.getElementsByClassName("demo");

    let captionText = document.getElementById("caption");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className += " active";

    captionText.innerHTML = dots[slideIndex-1].alt;

}

function showSlides2(n) {

    let i;

    let slides2 = document.getElementsByClassName("mySlides2");

    let dots2 = document.getElementsByClassName("demo2");

    let captionText2 = document.getElementById("caption2");

    if (n > slides2.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides2.length
    }

    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }

    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }

    slides2[slideIndex-1].style.display = "block";

    dots2[slideIndex-1].className += " active";

    captionText2.innerHTML = dots2[slideIndex-1].alt;
    
}

function showSlides3(n) {

    let i;

    let slides3 = document.getElementsByClassName("mySlides3");

    let dots3 = document.getElementsByClassName("demo3");

    let captionText3 = document.getElementById("caption3");

    if (n > slides3.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides3.length
    }

    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }

    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }

    slides3[slideIndex-1].style.display = "block";

    dots3[slideIndex-1].className += " active";

    captionText3.innerHTML = dots3[slideIndex-1].alt;

}

function showSlides4(n) {

    let i;

    let slides4 = document.getElementsByClassName("mySlides4");

    let dots4 = document.getElementsByClassName("demo4");

    let captionText4 = document.getElementById("caption4");

    if (n > slides4.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides4.length
    }

    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }

    for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" active", "");
    }

    slides4[slideIndex-1].style.display = "block";

    dots4[slideIndex-1].className += " active";

    captionText4.innerHTML = dots4[slideIndex-1].alt;

}

function showSlides5(n) {

    let i;

    let slides5 = document.getElementsByClassName("mySlides5");

    let dots5 = document.getElementsByClassName("demo5");

    let captionText5 = document.getElementById("caption5");

    if (n > slides5.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides5.length
    }

    for (i = 0; i < slides5.length; i++) {
        slides5[i].style.display = "none";
    }

    for (i = 0; i < dots5.length; i++) {
        dots5[i].className = dots5[i].className.replace(" active", "");
    }

    slides5[slideIndex-1].style.display = "block";

    dots5[slideIndex-1].className += " active";

    captionText5.innerHTML = dots5[slideIndex-1].alt;

}

function showSlides6(n) {

    let i;

    let slides6 = document.getElementsByClassName("mySlides6");

    let dots6 = document.getElementsByClassName("demo6");

    let captionText6 = document.getElementById("caption6");

    if (n > slides6.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides6.length
    }

    for (i = 0; i < slides6.length; i++) {
        slides6[i].style.display = "none";
    }

    for (i = 0; i < dots6.length; i++) {
        dots6[i].className = dots6[i].className.replace(" active", "");
    }

    slides6[slideIndex-1].style.display = "block";

    dots6[slideIndex-1].className += " active";

    captionText6.innerHTML = dots6[slideIndex-1].alt;

}

function initMap() {
    const locNZ = {lat: -42.32477863038237, lng: 172.549234577085};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: locNZ,
    });
    const marker = new google.maps.Marker({
      position: locNZ,
      map: map,
    });
}

window.initMap = initMap;