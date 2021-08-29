const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const progress = document.querySelector(".progress");
const lables = progress.querySelectorAll("label");

const slides_count = slides.length;
let current_slide = 0;

rightBtn.addEventListener("click", () => {
  current_slide++;
  if (current_slide > slides_count - 1) {
    current_slide = 0;
  }
  
  updateCarousel();
  updateLables(current_slide);
});

leftBtn.addEventListener("click", () => {
  current_slide--;
  if (current_slide < 0) {
    current_slide = slides_count - 1;
  }
  
  updateCarousel();
  updateLables(current_slide);
});
function updateCarousel() {
  console.log(`translateX(${current_slide * "1300"}px)`);
  carousel.style.transform = `translateX(${-current_slide * "100"}vw)`;
  document.body.style.background =
    slides[current_slide].getAttribute("data-bg");
}
function updateLables(_current_slide){
   for(let i=0;i<lables.length;i++){
    lables[i].classList.remove('active');
   }
  
   lables[_current_slide].classList.toggle('active');
   console.log(_current_slide,lables[_current_slide].className);

   
}

function labelSubmit(n){
    console.log(n-1);
    current_slide=n-1;
    updateCarousel();
    updateLables(current_slide);

}
