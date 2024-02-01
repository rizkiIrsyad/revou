let slideIndex = 0;
showSlides();

function plusDivs(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");

    setTimeout(() => {
        plusDivs(1);
    }, 3000); 
}

function validateForm() {
    const name=document.forms ['massage-form']['full-name'].value;
    const email=document.forms['massage-form']['email'].value;

    if (name == ""|| email== "") {
      alert("TIDAK BOLEH KOSONGG!!!")
      return false;
    }
   setSenderUI (name,email);

   return false;
  }
  
  function setSenderUI(name,email){
    document.getElementById("sender-full-name").innerText= name;
    document.getElementById("error-name").innerText= ""
    document.getElementById("sender-email").innerText= email;

  }

