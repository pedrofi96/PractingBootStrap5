// Add custom JavaScript here

function userScroll(){
  const navbar = document.querySelector(".navbar");

  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 60){
      navbar.classList.add('background-custom');
    }else{
      navbar.classList.remove('background-custom');
    }
  });

}
document.addEventListener('DOMContentLoaded', userScroll);
