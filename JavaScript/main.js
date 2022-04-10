// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("nav").style.top = "0px";
//   } else {
//     document.querySelector("nav").style.top = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// };

const sun=document.querySelector('.sun');
const moon=document.querySelector('.moon');
sun.addEventListener('click',()=>{
  sun.style.display="none";
  moon.style.display="block";
  document.body.classList.toggle('theme');
  if(document.body.classList.contains('theme')){
      icon.src="./images/sun.png";
  }else{
      icon.src="./images/moon.png";
  }
})
moon.addEventListener('click',()=>{
  moon.style.display="none";
  sun.style.display="block";
  document.body.classList.toggle('theme');
  if(document.body.classList.contains('theme')){
      icon.src="./images/sun.png";
  }else{
      icon.src="./images/moon.png";
  }
})


const parent=document.querySelector('.parent');
const line=document.querySelector('.line');
const list=document.querySelector('.navlist')
menuopen=false;
parent.addEventListener('click',()=>{
    menuopen=!menuopen;
    if(menuopen){
        parent.classList.add('open');
        list.style.display="flex";
        list.style.width="200px";
    }else{
        parent.classList.remove('open');
        list.style.display="none";
        list.style.width="0px";
    }
});