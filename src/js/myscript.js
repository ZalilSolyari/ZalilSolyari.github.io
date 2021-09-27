
let tip = prompt("Выберите тип сайта: 1 - Крутой 2 - Очень крутой 3 - Улётный", "Введите цифру");
    console.log(tip);

let des = prompt("Выберите дизайн сайта: 1 - Визитка 2 - Секретные архивы спец.служб 3 - Пентагон", "Введите цифру");
console.log(des);

let adapt = prompt("Выберите адаптиновсть сайта: 1 - Импровизируй 2 - Адаптируйся 3 - Выживай", "Введите цифру");
console.log(adapt);

let itog;
let srok;

let num1 = tip;

if(num1 === "1"){
  num1 = 1000;   

console.log(num1);
}
else if(num1 === "2"){
     num1 = 2000;
    console.log(num1);
}
else if(num1 === "3"){
     num1 = 3000;
    console.log(num1);
}
let num2 = des;


if(num2 === "1"){
  num2 = 1000;   

console.log(num2);
}
else if(num2 === "2"){
     num2 = 2000;
    console.log(num2);
}
else if(num2 === "3"){
     num2 = 3000;
    console.log(num2);
}
let num3 = adapt;

    if(num3 === "1"){
  num3 = 1000;   

console.log(num3);
}
else if(num3 === "2"){
     num3 = 2000;
    console.log(num3);
}
else if(num3 === "3"){
     num3 = 3000;
    console.log(num3);
}
    
itog = +num1 + +num2 + +num3+" драхм";
console.log(itog);
    confirm(itog);
srok = +tip + +des + +adapt+" Дн.";
console.log(srok);
    confirm(srok);