$(document).ready(function(){
    
    


function calculated(){
let tip = document.getElementById("#spisok11").value;
      console.log(tip);

    
    
    

let des = document.querySelector('#spisok12').value;

console.log(des);

let adapt = document.querySelector('#spisok13').value;

console.log(adapt);

let itog;
let srok;

let num1 = tip;

if(num1 === "Крутой"){
  num1 = 1000;   

console.log(num1);
}
else if(num1 === "Очень Крутой"){
     num1 = 2000;
    console.log(num1);
}
else if(num1 === "Улётный"){
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
    }
    

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



   let options = {threshold: [1]};
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
        






})












