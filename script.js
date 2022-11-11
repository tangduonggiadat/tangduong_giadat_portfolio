// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let icon = document.querySelector(".icon");
let arrow = document.querySelector(".arrow");
let scrollDown = document.querySelector(".scrollDown");
let scrollUp = document.querySelector(".scrollUp");
let personal = document.querySelector(".personal");

  let about = document.querySelector(".aboutTitle");
  let resume = document.querySelector(".resumeTitle");
  let slideshow = document.querySelector(".slideshowTitle");
  let portfolio = document.querySelector(".portfolioTitle");
  let contact = document.querySelector(".contactTitle");

  const loaderContainer = document.querySelector('.loader-container');

  function sayHello() {
      loaderContainer.style.display = 'none';
  }
  
  function ani() {
    loaderContainer.style.transform = 'translateY(45deg)';
}
setTimeout(sayHello, 6500);
setTimeout(ani, 6400);


  function isElementInViewport(el){
    // special bonus for those using jQuery
    if(typeof jQuery === "funtion" && el instanceof jQuery){
          el=el[0];
    }
    var rect= el.getBoundingClientRect();
    return(
    (rect.top<=0
    && rect.bottom>=0)
    ||
    (rect.bottom>=(window.innerHeight || document
    .documentElement.clientHeight)&&
    rect.top<=(window.innerHeight || document.documentElement
    .clientHeight))
    ||
    (rect.top>= 0 && 
       rect.bottom<=(window.innerHeight || document.documentElement.clientHeight)
       )
   );
  }

 var scroll = window.requestAnimationFrame||
              function(callBack){window.setTimeout(callBack,
                1000/60)};
  var elementToShow = document.querySelectorAll(".show-on-scroll");
  function loop(){
    elementToShow.forEach(function(element){
      if(isElementInViewport(element)){
        element.classList.add('is-visible');
      } else{
        element.classList.remove('is-visible');
      }
    });
    scroll(loop);
  }
  loop();

  window.addEventListener('scroll',function(){
    console.log('Scroll');
  })
   arrow.animate([
    {left: '0'},
    {left:' 20px'},
    {left:' 0'}
   ], {
    duration: 1000,
    iterations: Infinity
   });
 console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
    scrollDown.style.display = "none";
    personal.style.filter= 'blur(3px)';
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
    scrollDown.style.display = "block";
    personal.style.filter= 'none';
  }
 
  if (document.documentElement.scrollTop > 4000) {
    scrollDown.style.display = "none"
    scrollUp.style.display = "block"
  } else{
    scrollDown.style.display = "block"
    scrollUp.style.display = "none"
  }


  if(document.documentElement.scrollTop >4000){
     about.style.color="#FFFFFF"
     resume.style.color="#FFFFFF"
     slideshow.style.color="#FFFFFF"
     portfolio.style.color="#FFFFFF"
     contact.style.color="#F20100"
  }else if(document.documentElement.scrollTop<4100 && document.documentElement.scrollTop >3200){
    about.style.color="#FFFFFF"
    resume.style.color="#FFFFFF"
    slideshow.style.color="#FFFFFF"
    portfolio.style.color="#F20100"
    contact.style.color="#FFFFFF"
  }else if(document.documentElement.scrollTop <3600 && document.documentElement.scrollTop >2300){
    about.style.color="#FFFFFF"
    resume.style.color="#FFFFFF"
    slideshow.style.color="#F20100"
    portfolio.style.color="#FFFFFF"
    contact.style.color="#FFFFFF"
  }else if(document.documentElement.scrollTop <2600 && document.documentElement.scrollTop >1500){
    about.style.color="#FFFFFF"
    resume.style.color="#F20100"
    slideshow.style.color="#FFFFFF"
    portfolio.style.color="#FFFFFF"
    contact.style.color="#FFFFFF"
  }else if(document.documentElement.scrollTop <1600 && document.documentElement.scrollTop >500){
    about.style.color="#F20100"
    resume.style.color="#FFFFFF"
    slideshow.style.color="#FFFFFF"
    portfolio.style.color="#FFFFFF"
    contact.style.color="#FFFFFF"
  }else{
    about.style.color="#FFFFFF"
    resume.style.color="#FFFFFF"
    slideshow.style.color="#FFFFFF"
    portfolio.style.color="#FFFFFF"
    contact.style.color="#FFFFFF"
  }

};

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
/*Slider*/

 const slides=document.querySelector(".slider").children;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 const indicator=document.querySelector(".indicator");
 let index=0;


    function indicateSlide(element){
         index=element.id;
         changeSlide();
         updateCircleIndicator();
         resetTimer();
    }
     
    function updateCircleIndicator(){
    	for(let i=0; i<indicator.children.length; i++){
    		indicator.children[i].classList.remove("active");
    	}
    	indicator.children[index].classList.add("active");
    }

   function prevSlide(){
   	 if(index==0){
   	 	index=slides.length-1;
   	 }
   	 else{
   	 	index--;
   	 }
   	 changeSlide();
   }

   function nextSlide(){
      if(index==slides.length-1){
      	index=0;
      }
      else{
      	index++;
      }
      changeSlide();
   }

   function changeSlide(){
   	       for(let i=0; i<slides.length; i++){
   	       	 slides[i].classList.remove("active");
   	       }

       slides[index].classList.add("active");
   }

   function resetTimer(){
   	  // when click to indicator or controls button 
   	  // stop timer 
   	  clearInterval(timer);
   	  // then started again timer
   	  timer=setInterval(autoPlay,3000);
   }
 
  
  function autoPlay(){
      nextSlide();
      updateCircleIndicator();
  }

  let timer=setInterval(autoPlay,2000);
  $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
  

  

  