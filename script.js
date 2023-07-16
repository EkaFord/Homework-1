/*Задание 1*/

let password ='пароль';
prompt ("Введите пароль")

if ('пароль') {
    alert ("Пароль введен верно")
}
else {
    alert ("Пароль введен неправильно")
}

/*Задание 2*/

let c = 2;
if (c > 0 && c < 10) {
    console.log("Верно")
}
else {
    console.log("Неверно")
}

c = 0;
if (c > 0 && c < 10) {
    console.log("Верно")
}
else {
    console.log("Неверно")
}

c = 10;
if (c > 0 && c < 10) {
    console.log("Верно")
}
else {
    console.log("Неверно")
}

c = -3;
if (c > 0 && c < 10) {
    console.log("Верно")
}
else {
    console.log("Неверно")
}

c = 2;
if (c > 0 && c < 10) {
    console.log("Верно")
}
else {
    console.log("Неверно")
}

/*Задание 3*/

let d = 15;
let e = 1500;

if (d > 100 || e > 100) {
    console.log("Верно");
}
else {
    console.log("Неверно");
}


/*Задание 4*/

let a = '2';
let b = '3';
alert(parseInt(a) + parseInt(b));

/*Задание 5*/

let month = prompt('Введите месяц на английском');

switch (month) {
    case 'january':
        console.log('winter');
        break;
        case 'february':
        console.log('winter');
        break;
        case 'march':
        console.log('spring');
        break;
        case 'april':
        console.log('spring');
        break;
        case 'may':
        console.log('spring');
        break;
        case 'june':
        console.log('summer');
        break;
        case 'july':
        console.log('summer');
        break;
        case 'august':
        console.log('summer');
        break;
        case 'september':
        console.log('fall');
        break;
        case 'october':
        console.log('fall');
        break;
        case 'november':
        console.log('spring');
        break; 
        case 'december':
        console.log('winter');
        break;
default:
    console.log('Такого месяца не существует!');
   
}

/*Дополнительная практика*/

/*Задание 7*/

let userInput = prompt("Пожалуйста, введите любое число"); 

let number = Number(userInput);

if (!isNaN(number)) {
    if (number % 2 ===0) {
        alert("Число четное");
    } else  {
        alert("Число нечетное");
    }

    else {
        alert("Incorrect data")
    }

}