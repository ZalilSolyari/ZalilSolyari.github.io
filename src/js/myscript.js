     function calculated(select){
         
let select1 = document.getElementById("spisok11");
          let tip = select1.value;



      
let select2 = document.getElementById("spisok12");
          let des = select2.value;
      
let select3 = document.getElementById("spisok13");
          let adapt = select3.value;
      
         let itog;
         let srok;
         
         
         
         let num1 = tip;
         let days1
              
         
if(num1 === "opt2" ){
  num1 = 1000;
    days1 = 1;

} 
else if (num1 === "opt3") {
num1 = 2000;
    days1 = 2;
} 
else if(num1 === "opt4") {
num1 = 3000;
    days1 = 3;
}
         console.log(num1);
         let num2 = des;
         let days2
         
         if(num2 === "opt2" ){
  num2 = 1000;
             days2 = 1;

} 
else if (num2 === "opt3") {
num2 = 2000;
    days2 = 2;
} 
else if(num2 === "opt4") {
num2 = 3000;
    days2 = 3;
}
        
         let num3 = adapt;
          let days3
         
         if(num3 === "opt2" ){
  num3 = 1000;
             days3 = 1;

} 
else if (num3 === "opt3") {
num3 = 2000;
    days3 = 2;
} 
else if(num3 === "opt4") {
num3 = 3000;
    days3 = 3;
}
      
         
function schet(){
      itog = +num1 + +num2 + +num3 + " арбузов";
         
         document.getElementById("zerotwo").innerHTML = itog;
        srok = +days1 + +days2 + +days3 +" Дн.";
         document.getElementById("zeroone").innerHTML = srok;
    }
         schet();
     }



$(document).ready(function(){
    
    
  /* function calculated(select){ 
let tip = select.options[select.selectedIndex];
      alert(tip.value);
         
     




    
    
    

let des =  select.options[select.selectedIndex];;

alert(des.value);

let adapt =  select.options[select.selectedIndex];

alert(adapt.value);

let itog;
let srok;

let num1 = tip;

if(num1 === "opt2"){
  num1 = 1000;   

console.log(num1);
}
else if(num1 === "opt3"){
     num1 = 2000;
    console.log(num1);
}
else if(num1 === "opt4"){
     num1 = 3000;
    console.log(num1);
}
let num2 = des;


if(num2 === "opt2"){
  num2 = 1000;   

console.log(num2);
}
else if(num2 === "opt3"){
     num2 = 2000;
    console.log(num2);
}
else if(num2 === "opt4"){
     num2 = 3000;
    console.log(num2);
}
let num3 = adapt;

    if(num3 === "opt2"){
  num3 = 1000;   

console.log(num3);
}
else if(num3 === "opt3"){
     num3 = 2000;
    console.log(num3);
}
else if(num3 === "opt4"){
     num3 = 3000;
    console.log(num3);
}
    
itog = +num1 + +num2 + +num3+" арбузов";
console.log(itog);
   
srok = +tip + +des + +adapt+" Дн.";
console.log(srok);
  document.getElementById('zeroone') = itog;
    document.getElementById('zerotwo') = srok;
    
    
}*/
/*$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top + "px"});
});
*/

    
    $(window).scroll(() => {
       let scrollDistance = $(window).scrollTop();
        
        $(".section").each((i, el) => {
          
            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                $("nav a").each((i, el) => {
                   if($(el).hasClass("actbar")){
                       $(el).removeClass("actbar");
                   } 
                });
                $('nav li:eq('+ i +')').find('a').addClass('actbar');
            };
            
        });
        
    });
 
    




$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});




$(document).ready(function(){
    showStartModal();
});

function showStartModal(){
    setTimeout(function(){
        $('#exampleModal').modal('show');
    }, 10000);
}

let time = 2, begcifr1raz = 1;
$(window).scroll(function(){
    $('.statist').each(function(){
        let
        cPos = $(this).offset().top,
            topWindow = $(window).scrollTop();
        if (cPos < topWindow + 600){
            
            if(begcifr1raz < 2){
                $('.statist').addClass('vid');
            $('p').each(function(){
                let
                i = 1,
                    num = $(this).data('num'),
                    step = 1000 * time / num,
                    that= $(this),
                    int = setInterval(function(){
                        if (i <= num){
                            that.html(i);
                        }
                        else {
                            begcifr1raz = begcifr1raz + 2;    
                            clearInterval(int);
                            
                        }
                        i++;
                    },step);
            });
                };
        };
    });
});



  /* let options = {threshold: [1]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
       observer.observe(el);
    });
    
    function onEntry (entry){
        entry.forEach(change =>{
            if(change.isIntersecting){
                change.target.classList.add('show-animation', "show-animation1");
                
               
            }
        }) ;
    }
    
    */
    
      let options1 = {threshold: [0.5]};
    let observer1= new IntersectionObserver(onEntry1, options1);
    let elements1 = $('.imgview');
    elements1.each((i, el) => {
       observer1.observe(el);
    });
    
    function onEntry1 (entry1){
        entry1.forEach(change1 =>{
            if(change1.isIntersecting){
                change1.target.src = change1.target.dataset.src;
            }
        }) ;
    }
    
    
    
    
   /* $(window).scroll(function(){
    $('.statist').each(function(){
        let
        cPos = $(this).offset().top,
            topWindow = $(window).scrollTop();
        if (cPos < topWindow + 600){*/
    



$('.rev-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
  autoplaySpeed: 4000,
    speed: 2000,
});
        

    $('.slider').slick({
    autoplay: true,
  autoplaySpeed: 4000,
    speed: 2000,
});



const animItems = document.querySelectorAll('._animaciya');
    
    if(animItems.length > 0){
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(params){
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;
                
                let  animItemPoint = window.innerHeight - animItemHeight / animStart;
                
                if(animItemHeight > window.innerHeight){
                   animItemPoint = window.innerHeight - window.innerHeight / animStart;
                   }
                
                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                    animItem.classList.add('_animactive');
                } else {
                    if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_animactive');
                        }
                }
                
        }
    }
            function offset(el) {
                const rect = el.getBoundingClientRect(),
                      scrollLeft = window.pageXOffset ||
                      document.documentElement.scrollLeft,
                      
                      scrollTop = window.pageYOffset ||
                      document.documentElement.scrollTop;
                return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
                      
            }
        }
    
    
    

})












